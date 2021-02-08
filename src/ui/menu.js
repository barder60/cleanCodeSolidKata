let readlineSync = require('readline-sync')
const { filter, split, get, isEmpty, replace } = require('lodash')
const { createBook } = require('../core/action/Book')
const { createUser } = require('../core/action/User')

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
    let menu = ""
    const keys = actions().keys()
    
    for (let key of keys) {
        menu += replace(get(splitActionValue(key), 'label'), '/^', '')
        menu += "\n"
    }

    return menu
}

const menuActions = () => {
    const userInput = readlineSync.question('Your action:')
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
}

const menuHome = () => {
    console.log(menuRenderActions(actions))
    menuActions()
}

module.exports = {
    menuHome
}