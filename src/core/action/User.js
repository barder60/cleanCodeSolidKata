
const fs = require('fs')
const { get, find, assign } = require('lodash')

const { storage } = require('./../initializeModels')
const { userAlreadyExist } = require('./../../ui/error/error')
const { createUserInstance } = require('../models/User')

const createUser = (id) => {
    const users = get(storage, 'users')
    const userExist = find(users, { 'id': id })
    
    if (userExist) {
        userAlreadyExist(id)
        return
    }
    
    const newUser = createUserInstance(id)

    users.push(newUser)
    // assign(users, newUser)
}




module.exports = {
    createUser
}