let readlineSync = require('readline-sync')
const { filter, split, get, isEmpty, replace, isEqual, forEach, forIn } = require('lodash')

const { createBook, rentBook } = require('../core/action/Book')
const { createUser } = require('../core/action/User')
const { saveStorageToFile } = require('./../core/saveStorage')
const { storage } = require('./../core/initializeModels')

const actionsUi = () => {
    return [
        "command to write: createUser_userId  (ex: createUser_1 | not case sensible)",
        "command to write: createBook_bookId (ex: createBook_1 | not case sensible)",
        "command to write: addingBook_userId_bookId (ex: addingBook_1_1 | not case sensible)"
    ]
}
const actions = () => {
    const createUserMenu = (id) => {
        console.log(`createUser activate with id: ${id}\n`)
        createUser(id)
    }

    const createBookMenu = (id) => {
        console.log(`createBook activate with id: ${id}\n`)
        createBook(id)
    }

    const rentBookMenu = (userId, bookId) => {
        console.log(`addingBook activate with userId: ${userId} & bookId: ${bookId}\n`)
        rentBook(userId, bookId)
    }

    return new Map([
        [/^createUser_\d+$/gi, createUserMenu],
        [/^createBook_\d+$/gi, createBookMenu],
        [/^addingBook_\d+_\d+$/gi, rentBookMenu]
    ])
}

const splitActionValue = (choice) => {
    const splitChoice = split(choice, "_")
    const label = get(splitChoice, 0)
    const value = get(splitChoice, 1)
    const value2 = get(splitChoice, 2)
    console.log(`Your command : ${ label, value, value2}\n`)
    return { label, value, value2 }
}

const menuRenderActions = () => {
    console.log("actions possible: \n")
    
    forEach(actionsUi(), actionUi => {
        console.log(actionUi)
    })
}

const menuActions = (userInput) => {
    
    if(isEqual(userInput, "Q")) {
        return menuRenderQuit()
    }
    const { label, value, value2 } = splitActionValue(userInput)
    
    const action = filter([...actions()], function([key, _]) {
        return key.test(`${label}_${value}_${value2}`) || key.test(`${label}_${value}`)
    })

    if (isEmpty(action)) {
        console.log("Sorry you miss written the action")
        menuHome()
    }

    action.forEach(([_, action]) => {
        action.call(this, value, value2)
    })

    menuHome()
}



const menuRenderQuit = () => {

    console.log(`Press Q to quit\n`)
    
    saveStorageToFile()
}

const menuHome = () => {
    menuRenderQuit()
    menuRenderActions()
    console.log(storage)
    const userInput = readlineSync.question('Your action:')

    menuActions(userInput)
}

module.exports = {
    menuHome
}