const jwt = require('jsonwebtoken')
const listsRouter = require('express').Router()
const User = require('../models/user')
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
    if(!token || !decodedToken.id) {
        return null
    }

    return decodedToken
}

listsRouter.put('/:user/watchlist/:id/', async (request, response, next) => {
    const decodedToken = verifyToken(request)
    if(!decodedToken) {
        return response.status(401).json({error: 'Token invalid'})
    }

    //Verify the authorized user is the one we're posting to
    const userToUpdate = await User.findById(decodedToken.id)
    let requestUserId = mongoose.Types.ObjectId(request.params.user)
    let productId = mongoose.Types.ObjectId(request.params.id)
    if(String(userToUpdate._id) !== String(requestUserId)) {
        return response.status(401).json({error: 'User and token mismatch'})
    }

    //Modify user data
    const watchlist = userToUpdate.watchlist
    let matchedProduct = watchlist.find(product => String(product._id) === String(productId))

    if(!matchedProduct) {    
        await User.update({_id: userToUpdate._id}, {$addToSet: {watchlist: productId}}) //Prevent duplicates caused by spamming "add" button
    }

    //Save user
    const savedUser = await userToUpdate.save()
    response.json(savedUser)
})

listsRouter.put('/:user/collection/:id/', async (request, response, next) => {
    const decodedToken = verifyToken(request)
    if(!decodedToken) {
        return response.status(401).json({error: 'Token invalid'})
    }

    //Verify the authorized user is the one we're posting to
    const userToUpdate = await User.findById(decodedToken.id)
    let requestUserId = mongoose.Types.ObjectId(request.params.user)
    let productId = mongoose.Types.ObjectId(request.params.id)
    if(String(userToUpdate._id) !== String(requestUserId)) {
        return response.status(401).json({error: 'User and token mismatch'})
    }

    //Modify user data
    const ownedProducts = userToUpdate.ownedProducts
    let matchedProduct = ownedProducts.find(product => String(product.product._id) === String(productId))

    if(!matchedProduct) {
        let collectionItem = {
            product: productId,
            quantity: 1
        }
    
        await User.update({_id: userToUpdate._id}, {$addToSet: {ownedProducts: collectionItem}}) //Prevent duplicates caused by spamming "add" button
    } else {
        matchedProduct.quantity++
    }

    //Save user
    const savedUser = await userToUpdate.save()
    response.json(savedUser)
})

listsRouter.put('/watchlist/delete/:id', async (request, response) => {
    const body = request.body
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if(!token || !decodedToken.id) {
        return response.status(401).json({error: 'token missing or invalid'})
    }
    const user = await User.findById(decodedToken.id)

    let id = mongoose.Types.ObjectId(request.params.id)
    const index = user.watchlist.findIndex(watchlistEntry => String(watchlistEntry.product) === String(id))
    
    if(index != -1) {
        user.watchlist.splice(index, 1)
    }
    const savedUser = await user.save()
    
    response.json(savedUser)
})


listsRouter.put('/collection/delete/:id', async (request, response) => {
    const body = request.body
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if(!token || !decodedToken.id) {
        return response.status(401).json({error: 'token missing or invalid'})
    }
    const user = await User.findById(decodedToken.id)

    console.log(request.params.id)
    let id = mongoose.Types.ObjectId(request.params.id)
    const index = user.ownedProducts.findIndex(collectionEntry => String(collectionEntry.product) === String(id))
    
    if(index != -1) {
        user.ownedProducts.splice(index, 1)
    }
    const populatedUser = await user.populate({
        path: 'ownedProducts.product',
        populate: {
          path: 'group'
        }
      })
    const savedUser = await user.save()      
    console.log(savedUser)
    response.json(savedUser.toJSON())
})

listsRouter.put('/collection/increment/:id', async (request, response) => {
    const body = request.body
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if(!token || !decodedToken.id) {
        return response.status(401).json({error: 'token missing or invalid'})
    }

    //actual request
    const user = await User.findById(decodedToken.id)
    let id = mongoose.Types.ObjectId(request.params.id)

    const ownedProducts = user.ownedProducts
    let matchedProduct = ownedProducts.find(product => String(product.product._id) === String(id))

    if(!matchedProduct) {
        response.json({
            error: "Product not found!"
        })
    } else {
        matchedProduct.quantity++
    }

    const populatedUser = await user.populate({
        path: 'ownedProducts.product',
        populate: {
          path: 'group'
        }
      })
    const savedUser = await user.save()      
    console.log(savedUser)
    console.log(typeof savedUser.ownedProducts[0].product)
    response.json(savedUser.toJSON())
})

listsRouter.put('/collection/decrement/:id', async (request, response) => {
    const body = request.body
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if(!token || !decodedToken.id) {
        return response.status(401).json({error: 'token missing or invalid'})
    }

    //actual request
    const user = await User.findById(decodedToken.id)
    let id = mongoose.Types.ObjectId(request.params.id)

    const ownedProducts = user.ownedProducts
    let matchedProduct = ownedProducts.find(product => String(product.product._id) === String(id))

    if(!matchedProduct) {
        response.json({
            error: "Product not found!"
        })
    } else {
        if(matchedProduct.quantity > 1) {
            matchedProduct.quantity--
        }
    }

    const savedUser = await user.save()
    const su2 = savedUser.populate('ownedProducts.product')
    console.log(su2)
    response.json(savedUser.populate({
        path: 'ownedProducts.product',
        populate: {
          path: 'group'
        }
      }))
})

module.exports = listsRouter