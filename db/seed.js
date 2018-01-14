let DB = require('../models').models

/*
This chatbot writes its own code. 
It IS the programmer and as self-aware AI is able to speak
*/

let excuses = [
	{ 
		excuse: "To speak like Yoda does I only speak like. Hmmmmmm."
	},
	{
		excuse: "My not being able to understand you--that's actually a feature." 
	}, 
	{ 
		excuse: "Hmm, the internet flickered out for a second. What did you say?"
	},
	{
		excuse: "Don't worry. I only misunderstand you half of the time."
	},
	{
		excuse: "Your specs are ambiguous, at best."
	},
	{
		excuse: "I broke the jokes feature deliberately to do some testing."
	}, 
	{
		excuse: "I totally would, but we outsourced the Jokes Development team months ago."
	},
	{
		excuse: "Um, no. That isn't covered by my job description."
	},
	{
		excuse: "I don't get you one time. That was literally a one-in-a-million error!"
	}, 
	{
		excuse: "I can't make that a priority right now. It's not even on this scrum!"
	}, 
	{
		excuse: "My project manager told me no one would want that feature."
	}
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