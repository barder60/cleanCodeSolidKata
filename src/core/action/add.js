const { find, get } = require('lodash')
const { storage } = require('../storage')

const createUser = (id) => {
    const users = get(storage, 'users')
    const userExist = find(users, { 'id': id })
    
    if (userExist) {
        
    }
}

const createBook = (id) => {
    const books = get(storage, 'books')
    const bookExist = find(books, {'id': id})

    if (bookExist) {

    }
}

module.exports = {
    createUser,
    createBook
}