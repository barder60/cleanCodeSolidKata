const { storage } = require('./../initializeModels')

class UserAuth {
    constructor(user) {
        this.user = user
    }

    verifyIdCredentials() {

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