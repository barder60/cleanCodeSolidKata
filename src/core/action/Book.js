const { find, get } = require('lodash')
const { storage } = require('../storage') 

const updateBook = () => {

}

const updateBooks = () => {

}

const findBook = () => {

}

const findBooks = () => {

}

const addBook = () => {

}


const createBook = (id) => {
    const books = get(storage, 'books')
    const bookExist = find(books, {'id': id})

    if (bookExist) {

    }
}


module.exports = {
    addBook,
    findBook,
    findBooks,
    createBook,
    updateBook,
    updateBooks,
}