const userAlreadyExist = (id) => {
    console.log(`Error -> User: ${id} , already exist in users\n`)
}

const bookAlreadyExist = (id) => {
    console.log(`Error -> Book: ${id} , already exist in Books\n`)
}

const userBookLimit = (userId) => {
    console.log(`Error -> User: ${userId} , have already 3 books in use\n`)
}


module.exports = {
    userAlreadyExist,
    bookAlreadyExist,
    userBookLimit
}