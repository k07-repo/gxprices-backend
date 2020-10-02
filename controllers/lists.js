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
    }

    //Save user
    const savedUser = await userToUpdate.save()
    response.json(savedUser)
})

listsRouter.put('/:user/watchlist/delete/:id', async (request, response) => {
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
    const index = watchlist.findIndex(product => String(product._id) === String(productId))
    if(index > 0) {
        watchlist.splice(index, 1)
    }

    //Save user
    await userToUpdate.save()

    //Retrieve newly populated user and send that back
    const populatedUser = await User.findById(decodedToken.id).populate({
        path: 'ownedProducts.product',
        populate: {
          path: 'group'
        }
    }) 

    response.json(populatedUser.toJSON())
})


listsRouter.put('/:user/collection/delete/:id', async (request, response) => {
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
 
    const index = userToUpdate.ownedProducts.findIndex(collectionEntry => String(collectionEntry.product) === String(productId))
    
    if(index != -1) {
        userToUpdate.ownedProducts.splice(index, 1)
    }

    await userToUpdate.save()

    //Retrieve newly populated user and send that back
    const populatedUser = await User.findById(decodedToken.id).populate({
        path: 'ownedProducts.product',
        populate: {
          path: 'group'
        }
    }) 

    response.json(populatedUser.toJSON())
})

listsRouter.put('/:user/collection/increment/:id', async (request, response) => {
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

    //actual request
    let id = mongoose.Types.ObjectId(request.params.id)
    const ownedProducts = user.ownedProducts
    let matchedProduct = ownedProducts.find(product => String(product.product._id) === String(productId))

    if(!matchedProduct) {
        response.json({
            error: "Product not found!"
        })
    } else {
        matchedProduct.quantity++
    }

    await userToUpdate.save()

    //Retrieve newly populated user and send that back
    const populatedUser = await User.findById(decodedToken.id).populate({
        path: 'ownedProducts.product',
        populate: {
          path: 'group'
        }
    }) 

    response.json(populatedUser.toJSON())
})

listsRouter.put('/:user/collection/decrement/:id', async (request, response) => {
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

    //actual request
    let id = mongoose.Types.ObjectId(request.params.id)

    const ownedProducts = user.ownedProducts
    let matchedProduct = ownedProducts.find(product => String(product.product._id) === String(productId))

    if(!matchedProduct) {
        response.json({
            error: "Product not found!"
        })
    } else {
        if(matchedProduct.quantity > 1) {
            matchedProduct.quantity--
        }
    }

    await userToUpdate.save()

    //Retrieve newly populated user and send that back
    const populatedUser = await User.findById(decodedToken.id).populate({
        path: 'ownedProducts.product',
        populate: {
          path: 'group'
        }
    }) 

    response.json(populatedUser.toJSON())
})

module.exports = listsRouter