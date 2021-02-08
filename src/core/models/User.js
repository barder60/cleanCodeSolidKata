const { find, get, assign } = require('lodash')
const { storage } = require('./../initializeModels')
const { userBookLimit } = require('./../../ui/error/error')

class UserAuth {
    constructor(user) {
        this.user = user
    }

    verifyIdCredentials() {
        return true
    }
}

class UserSettings {
    constructor(user) {
        this.user = user
        this.auth = new UserAuth(user)
    }

    changeSettings(settings) {
        if (this.auth.verifyIdCredentials()) {

        }
    }
}

class User {
    constructor(id) {
        this.id = id
        this.settings = new UserSettings(this)
    }


}

const createUserInstance = (id) => {
    return new User(id)
}

module.exports = {
    createUserInstance
}