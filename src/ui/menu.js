var readlineSync = require('readline-sync')
const { filter, split, get, isNull, isEmpty } = require('lodash')

const { createUser, createBook } = require('../core/action/add')

const actions = () => {
    const createUserMenu = (id) => {
        createUser(id)
    }

    const createBookMenu = (id) => {
        createBook(id)
    }

    return new Map([
        [/^createUser_\d+$/, createUserMenu],
        [/^createBook_\d+$/, createBookMenu]
    ])
}

const splitActionValue = (choice) => {
    const splitChoice = split(choice, "_", 1)
    const label = get(splitChoice, 0)
    const value = get(splitChoice, 1) 
    
    return { label, value }
}

const menuRenderActions = () => {
    return ""
}

const menuActions = () => {
    const userInput = readlineSync.question('Your action:')
    const { label, value } = splitActionValue(userInput)

    const action = filter(actions, (key, _) => {
        key.test(`${label}_${value}`)
    })

    if (isEmpty(action)) {
        console.log("Sorry you miss written the action")
        menuHome()
    }
}

const menuHome = () => {
    menuRenderActions()
    menuActions()
}

module.exports = {
    menuHome
}