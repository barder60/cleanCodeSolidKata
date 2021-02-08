let readlineSync = require('readline-sync')
const { filter, split, get, isEmpty, replace, isEqual } = require('lodash')

const { createBook } = require('../core/action/Book')
const { createUser } = require('../core/action/User')
const { storage } = require('./../core/initializeModels')

const actions = () => {
    const createUserMenu = (id) => {
        console.log(`createUser activate with id: ${id}`)
        createUser(id)
    }

    const createBookMenu = (id) => {
        console.log(`createBook activate with id: ${id}`)
        createBook(id)
    }

    return new Map([
        [/^createUser_\d+/gi, createUserMenu],
        [/^createBook_\d+/gi, createBookMenu]
    ])
}

const splitActionValue = (choice) => {
    const splitChoice = split(choice, "_")
    const label = get(splitChoice, 0)
    const value = get(splitChoice, 1)
    
    return { label, value }
}

const menuRenderActions = (actions) => {
    console.log("write: $actions_$id")
    console.log("actions possible: ")
    const keys = actions().keys()
    
    for (let key of keys) {
        console.log(replace(get(splitActionValue(key), 'label'), '/^', ''))    
    }
}

const saveAndQuit = () => {

}

const menuActions = (userInput) => {
    
    if(isEqual(userInput, "Q")) {
        return saveAndQuit()
    }
    const { label, value } = splitActionValue(userInput)
    
    const action = filter([...actions()], function([key, _]) {
        return key.test(`${label}_${value}`)
    })

    if (isEmpty(action)) {
        console.log("Sorry you miss written the action")
        menuHome()
    }

    action.forEach(([_, action]) => {
        action.call(this, value)
    })

    menuHome()
}

const menuRenderQuit = () => {
    console.log(`Press Q to quit`)
}

const menuHome = () => {
    menuRenderQuit()
    menuRenderActions(actions)
    console.log(storage)
    const userInput = readlineSync.question('Your action:')

    menuActions(userInput)
}

module.exports = {
    menuHome
}