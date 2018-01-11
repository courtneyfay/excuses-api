module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("excuses", {
		excuse: Sequelize.TEXT
	})
	return model
}