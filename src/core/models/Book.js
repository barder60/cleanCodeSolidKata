const { storage } = require('./../initializeModels')

class Book {
    constructor(id) {
        this.id = id
    }
}

const createBookInstance = (id) => {
    return new Book(id)
}

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



module.exports = {
    addBook,
    findBook,
    findBooks,
    updateBook,
    updateBooks,
    createBookInstance
}