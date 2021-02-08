const fs = require('fs')
const { get } = require('lodash')

// require('../../../storage/users.json')
const config = {
    user: {
        path:'./storage/users.json',
        encoding: 'utf-8'
    }
}

const initializeUser = () => {
    const userPath = get(config,'user.path')
    const userEncoding = get(config, 'user.encoding')
    const fileText = fs.readFileSync(userPath, userEncoding)
    const users = JSON.parse(fileText)


    console.log(users)
}

const initializeModels = () => {
    initializeUser()
}


module.exports = {
    initializeModels
}