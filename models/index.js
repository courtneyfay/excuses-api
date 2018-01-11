const Sequelize = require('sequelize')
const user_name = 'cfay'
const sequelize = new Sequelize(process.env.DATABASE_URL || `postgres://${user_name}@localhost:5432/excuses`)

//EXPORT MODELS AND SEQUELIZE FOR DBSETUP
module.exports.sequelize = sequelize
module.exports.Sequelize = Sequelize

//IMPORT DB MODELS
const Excuses = sequelize.import('./excuses')

module.exports.models = {
	Excuses: Excuses
}