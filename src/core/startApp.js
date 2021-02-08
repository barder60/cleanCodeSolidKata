const { initializeModels } = require('./initializaseur/initializeModels')
const { menuHome } = require('../ui/menu')
const startApp = () => {
    initializeModels()
    menuHome()
}


startApp()