const { initializeModels } = require('./models/initializeModels')

const storage = initializeModels()

const config = {
    users: {
        path:'./storage/users.json',
        encoding: 'utf-8'
    },
    books: {
        path:'./storage/books.json',
        encoding: 'utf-8'
    }
}

module.exports = {
    storage,
    config
}