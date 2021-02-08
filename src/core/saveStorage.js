const fs = require('fs')
const { get } = require('lodash')

const { storage, config } = require('./initializeModels')

const saveStorageToFile = () => {
    const users = JSON.stringify(get(storage, 'users'))
    const books = JSON.stringify(get(storage, 'books'))

    const userPath = get(config,'users.path')
    const bookPath = get(config,'books.path')

    fs.writeFileSync(userPath, users)
    fs.writeFileSync(bookPath, books)
}

module.exports = {
    saveStorageToFile
}