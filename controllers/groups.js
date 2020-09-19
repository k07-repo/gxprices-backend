const groupsRouter = require('express').Router()
const Group = require('../models/group')

groupsRouter.get('/', async (request, response) => {
  const groups = await Group.find({})

  response.json(groups.map(group => group.toJSON()))
})

module.exports = groupsRouter
