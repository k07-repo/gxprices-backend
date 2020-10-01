const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response, next) => {
  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

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

usersRouter.get('/', async(request, response) => {
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
  const user = await User.findOne({_id: request.params.id})
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

module.exports = usersRouter