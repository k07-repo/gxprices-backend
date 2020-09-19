const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const metaSchema = new mongoose.Schema({
  lastUpdated: Date
})

module.exports = mongoose.model('Meta', metaSchema)
