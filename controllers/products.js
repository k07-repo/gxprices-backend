const productRouter = require('express').Router()
const Product = require('../models/product')

productRouter.get('/', async (request, response) => {
  const products = await Product.find({}).populate('group')

  response.json(products.map(product => product.toJSON()))
})

productRouter.get('/group/:id', async (request, response) => {
  const products = await Product.find({groupId: request.params.id}).populate('group')
  response.json(products.map(product => product.toJSON()))
})

productRouter.get('/product/:id', async (request, response) => {
  const product = await Product.findOne({productId: request.params.id}).populate('group')

  if(product) {
    response.json(product.toJSON())
  } else {
    response.status(404).end()
  }
})

productRouter.get('/search/:searchTerm', async (request, response) => {
  const searchTerm = request.params.searchTerm

  //let's avoid small search terms
  if(searchTerm.length < 3) {
    response.status(400).json({"error": "Search term must be 3 or more characters!"})
  }
  const products = await Product.find({name: { "$regex": searchTerm, "$options": "i" }}).populate('group')

  response.json(products.map(product => product.toJSON()))
})

module.exports = productRouter
