const userAlreadyExist = (id) => {
    console.log(`Error -> User: ${id} already exist in users`)
}

const bookAlreadyExist = (id) => {
    console.log(`Error -> Book: ${id} already exist in Books`)
}


module.exports = {
    userAlreadyExist,
    bookAlreadyExist
}