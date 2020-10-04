const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const listsRouter = require('express').Router()
const mongoose = require('mongoose')

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

  const saltRounds = 10
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

usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
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
    
  response.json(users)
})

usersRouter.get('/:id', async (request, response) => {
  const user = await User.findOne({ _id: request.params.id })
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

module.exports = usersRouter