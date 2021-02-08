const { initializeModels } = require('./initializaseur/initializeModels')

const storage = initializeModels()

module.exports = {
    storage
}