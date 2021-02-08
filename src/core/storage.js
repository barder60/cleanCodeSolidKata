const { initializeModels } = require('./initializeModels')

const storage = initializeModels()

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

module.exports = {
    storage,
    config
}