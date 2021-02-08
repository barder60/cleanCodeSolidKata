const fs = require('fs')
const { get } = require('lodash')
const { config } = require('../storage')

const initializeUser = () => {
    const userPath = get(config,'users.path')
    const userEncoding = get(config, 'user.encoding')
    const fileText = fs.readFileSync(userPath, userEncoding)
    const users = JSON.parse(fileText)

    return users
}

const initializeBooks = () => {
    const bookPath = get(config,'books.path')
    const bookEncoding = get(config, 'user.encoding')
    const fileText = fs.readFileSync(bookPath, bookEncoding)
    const books = JSON.parse(fileText)

    return books
}


const initializeModels = () => {
    const users = initializeUser()
    const books = initializeBooks()

    return { users, books }
}


module.exports = {
    initializeModels
}