
const createUser = (id) => {
    const users = get(storage, 'users')
    const userExist = find(users, { 'id': id })
    
    if (userExist) {
        
    }
}




module.exports = {
    createUser
}