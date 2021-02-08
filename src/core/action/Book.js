const { find, get } = require('lodash')

const { storage } = require('./../initializeModels')
const { bookAlreadyExist } = require('./../../ui/error/error')
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
        bookAlreadyExist(id)
        return
    }
    
    const newBook = createBookInstance(id)

    books.push(newBook)
}


module.exports = {
    addBook,
    findBook,
    createBook,
    updateBook,
}