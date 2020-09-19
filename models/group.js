const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const groupSchema = new mongoose.Schema({
  groupId: Number,
  groupName: String
})

module.exports = mongoose.model('Group', groupSchema)
