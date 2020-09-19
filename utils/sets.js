const Group = require('../models/Group') 

const retrieveAllSetIds = async () => {
    const results = await Group.find({})
    return results.map(result => result.groupId)
}

const retrieveSetName = async (setId) => {
    const result = await Group.findOne({groupdId: setId})
    return result
}

module.exports = {
    retrieveAllSetIds,
    retrieveSetName
}