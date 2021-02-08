const fs = require('fs')
const { get } = require('lodash')

const config = {
    users: {
        path:'./storage/users.json',
        encoding: 'utf-8'
    },
    books: {
        path:'./storage/books.json',
        encoding: 'utf-8'
    },
    library: {
        path:'./storage/library.json',
        encoding: 'utf-8'
    }
}

const initializeUser = () => {
    const userPath = get(config,'users.path')
    const userEncoding = get(config, 'user.encoding')
    const userText = fs.readFileSync(userPath, userEncoding)
    const users = JSON.parse(userText)

    return users
}

const initializeBooks = () => {
    const bookPath = get(config,'books.path')
    const bookEncoding = get(config, 'books.encoding')
    const bookText = fs.readFileSync(bookPath, bookEncoding)
    const books = JSON.parse(bookText)

    return books
}

const initializeLibrary = () => {
    const libraryPath = get(config, 'library.path')
    const libraryEncoding = get(config, 'library.encoding')
    const libraryText = fs.readFileSync(libraryPath, libraryEncoding)
    const library = JSON.parse(libraryText)

    return library
}


const initializeModels = () => {
    const users = initializeUser()
    const books = initializeBooks()
    const library = initializeLibrary()
    
    return { users, books, library }
}

const storage = initializeModels()

module.exports = {
    storage
}