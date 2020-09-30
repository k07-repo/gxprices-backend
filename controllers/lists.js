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

listsRouter.put('/watchlist/:id', async (request, response, next) => {
    const body = request.body
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if(!token || !decodedToken.id) {
        return response.status(401).json({error: 'token missing or invalid'})
    }

    //actual request
    const user = await User.findById(decodedToken.id)
    let id = mongoose.Types.ObjectId(request.params.id)

    const watchlist = user.watchlist
    let matchedProduct = watchlist.find(product => String(product.product._id) === String(id))

    if(!matchedProduct) {
        watchlist.push({
            product: id,
            quantity: 1
        })
    } else {
        matchedProduct.quantity++
    }

    const savedUser = await user.save()
    response.json(savedUser)
})

listsRouter.put('/collection/:id', async (request, response, next) => {
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
        ownedProducts.push({
            product: id,
            quantity: 1
        })
    } else {
        matchedProduct.quantity++
    }

    const savedUser = await user.save()
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