let DB = require('../models').models

let excuses = [
	{ 
		excuse: "To speak like Yoda does I only speak like. Hmmmmmm."
	},
	{
		excuse: "My misunderstanding you...that's actually a feature." 
	}, 
	{ 
		excuse: "Hmm, the internet flickered out for a second. What did you say?"
	},
	{
		excuse: "Don't worry. I only mishear you half of the time."
	},
	{
		excuse: "I'm still working on understanding you as we speak."
	},
]

//delete all the data before re-seeding the database
let excusesDelete = function() {
	return DB.Excuses.destroy({
		where: {}
	})
}

let excusesCreate = function() {
	return DB.Excuses.bulkCreate(excuses)
}

excusesDelete()
.then(excusesCreate)
.then(function() {
	process.exit()
})