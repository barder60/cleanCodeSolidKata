const { find, get, size, assign, filter } = require('lodash')

const { storage } = require('./../initializeModels')
const { bookAlreadyExist, userBookLimit } = require('./../../ui/error/error')
const { createBookInstance } = require('../models/Book')

const updateBook = () => {

}

const findBook = () => {

}

const addBook = () => {

}


const createBook = (id) => {
    const books = get(storage, 'books')
    const bookExist = find(books, { 'id': id })

    if (bookExist) {
        return bookAlreadyExist(id)
    }
    
    const newBook = createBookInstance(id)

    books.push(newBook)
}

const rentBook = (userId, bookId) => {
    const books = get(storage, 'books')
    const userBooks = filter(books, { 'userId': userId })
    const book = find(books, { 'id': bookId })
    const bookLimit = 3

    if (size(userBooks) >= bookLimit) {
        return userBookLimit(userId)
    }

    assign(book, { userId })
}


module.exports = {
    addBook,
    findBook,
    rentBook,
    createBook,
    updateBook,
}