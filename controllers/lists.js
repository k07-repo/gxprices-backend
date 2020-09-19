const jwt = require('jsonwebtoken')
const listsRouter = require('express').Router()
const User = require('../models/user')

const getTokenFrom = (request) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

listsRouter.post('/watchlist/:id', async (request, response) => {
    const body = request.body
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if(!token || !decodedToken.id) {
        return response.status(401).json({error: 'token missing or invalid'})
    }
    const user = await User.findById(decodedToken.id)
    user.watchlist.push(request.params.id)
    const savedUser = await user.save()
    
    response.json(savedUser)
})

listsRouter.delete('/watchlist/:id', async (request, response) => {
    const body = request.body
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if(!token || !decodedToken.id) {
        return response.status(401).json({error: 'token missing or invalid'})
    }
    const user = await User.findById(decodedToken.id)
    const index = user.watchlist.findIndex(cardId => cardId == request.params.id)
    if(index != -1) {
        user.watchlist.splice(index, 1)
    }
    const savedUser = await user.save()
    
    response.json(savedUser)
})

module.exports = listsRouter