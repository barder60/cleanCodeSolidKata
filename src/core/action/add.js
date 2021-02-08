// const { } = require('../../ui/')
const { find } = require('lodash')

const createUser = (users, id) => {
    const userExist = find(users, { 'id': id })
    
    if (userExist) {

    }
}

const createBook = (books, id) => {
    const bookExist = find(books, { 'id': id})

    if (bookExist) {

    }
}

module.exports = {
    createUser
}