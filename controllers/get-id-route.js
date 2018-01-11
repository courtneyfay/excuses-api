let Sequelize = require('../models').Sequelize
let db = require('../models')
let Excuses = db.models.Excuses

getOne = (req, res) => {
	console.log("hit get/:id route")
	Excuses.find({
		order: [
			Sequelize.fn('RANDOM')
		]
	})
	.then(function(excuse) {
		res.json(excuse)
	})
}

module.exports = getOne