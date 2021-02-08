const { storage } = require('./../initializeModels')

class User {
    constructor(id) {
        this.id = id
    }
}

const createUserInstance = (id) => {
    return new User(id)
}

module.exports = {
    createUserInstance
}