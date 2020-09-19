const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const productSchema = new mongoose.Schema({
  productId: Number,
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
  groupId: Number,
  name: String,
  imageUrl: String,
  storeUrl: String,
  cardNumber: String,
  cardRarity: String,
  currentMarketPrice: Number,
  currentDate: Date,
  previousMarketPrice: Number
})

module.exports = mongoose.model('Product', productSchema)
