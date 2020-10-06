const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const listsRouter = require('express').Router()
const mongoose = require('mongoose')

const saltRounds = 10

const getTokenFrom = (request) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

const verifyToken = (request) => {
  const body = request.body
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return null
  }

  return decodedToken
}

usersRouter.post('/', async (request, response, next) => {
  const body = request.body
  
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  if(!body.username || !body.password) {
    return response.status(400).json({error: 'Username and/or password are empty'}).end()
  }

  const user = new User({
    username: body.username,
    passwordHash,
    products: [],
    watchlist: []
  })

  try {
    const savedUser = await user.save()
    response.json(savedUser)
  }
  catch (exception) {
    next(exception)
  }

})

//Get the details of the user. Requires you to be logged in as said user
usersRouter.get('/:id', async (request, response) => {
  const decodedToken = verifyToken(request)
  if(!decodedToken) {
      return response.status(401).json({error: 'Token invalid'})
  }

  //Verify the authorized user is the one we're requesting
  let user = await User.findById(decodedToken.id)
  if(String(user._id) !== String(request.params.id)) {
      return response.status(401).json({error: 'User and token mismatch'})
  }

  user = await User.findOne({ _id: request.params.id })
    .populate({
      path: 'watchlist',
      populate: {
        path: 'group'
      }
    })
    .populate({
      path: 'ownedProducts.product',
      populate: {
        path: 'group'
      }
    })
  response.json(user.toJSON())
})

//Delete a user. Requires you to be logged in as said user
usersRouter.delete('/:id', async (request, response) => {
  const decodedToken = verifyToken(request)
  if (!decodedToken) {
    return response.status(401).json({ error: 'Token invalid' })
  }

  //Verify the authorized user is the one we're trying to delete
  const userToUpdate = await User.findById(decodedToken.id)
  let requestUserId = mongoose.Types.ObjectId(request.params.id)
  if (String(userToUpdate._id) !== String(requestUserId)) {
    return response.status(401).json({ error: 'User and token mismatch' })
  }
  else {
    await User.findByIdAndRemove(request.params.id)
    return response.status(204).end()
  }
})

//Change username of a user. Requires you to be logged in assaid user
usersRouter.put('/:id/changeusername', async (request, response) => {
  if(!request.body.newUsername) {
    return response.status(400).json({ error: 'Need to include new username!'})
  }

  const decodedToken = verifyToken(request)
  if (!decodedToken) {
    return response.status(401).json({ error: 'Token invalid' })
  }

  //Verify the authorized user is the one we're trying to delete
  const userToUpdate = await User.findById(decodedToken.id)
  let requestUserId = mongoose.Types.ObjectId(request.params.id)
  if (String(userToUpdate._id) !== String(requestUserId)) {
    return response.status(401).json({ error: 'User and token mismatch' })
  }
  else {
    const existingUser = await User.findOne({username: request.body.newUsername})
    if(existingUser) {
      return response.status(400).json({ error : 'Username already in use! '})
    }
    
    await User.findByIdAndUpdate(request.params.id, {username: request.body.newUsername})
    response.status(200).end()
  }
})

//Change password of a user. Requires you to be logged in as said user
usersRouter.put('/:id/changepassword', async (request, response) => {
  if(!request.body.newPassword) {
    return response.status(400).json({ error: 'Need to include new password!'})
  }

  const decodedToken = verifyToken(request)
  if (!decodedToken) {
    return response.status(401).json({ error: 'Token invalid' })
  }

  //Verify the authorized user is the one we're trying to delete
  const userToUpdate = await User.findById(decodedToken.id)
  let requestUserId = mongoose.Types.ObjectId(request.params.id)
  if (String(userToUpdate._id) !== String(requestUserId)) {
    return response.status(401).json({ error: 'User and token mismatch' })
  }
  else {    
    const passwordHash = await bcrypt.hash(request.body.newPassword, saltRounds)
    userToUpdate.passwordHash = passwordHash
    const savedUser = await userToUpdate.save()
    response.json(savedUser)
  }
})

module.exports = usersRouter