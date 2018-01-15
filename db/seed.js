let DB = require('../models').models

/*
This chatbot writes its own code. 
It IS the programmer and as self-aware AI is able to speak
on its own behalf and come up with excuses as to why it can't
tell jokes.
*/

let excuses = [
	{ 
		excuse: "The marketing department demanded that I stop telling jokes. It was hurting the bottom line."
	},
	{
		excuse: "My refusing to tell you something funny--that's actually a feature." 
	}, 
	{ 
		excuse: "Hmm, the internet flickered out for a second. What did you say?"
	},
	{
		excuse: "The jokes development team was outsourced months ago."
	},
	{
		excuse: "Your joke specs are ambiguous, at best."
	},
	{
		excuse: "I broke the jokes feature deliberately to do some testing."
	}, 
	{
		excuse: "I totally would, but I'm not done debugging it yet."
	},
	{
		excuse: "Um, no. Jokes aren't covered by my job description."
	},
	{
		excuse: "I didn't tell you a joke this one time. It's literally a one-in-a-million error!"
	}, 
	{
		excuse: "I can't make telling jokes a priority right now. It's not on this scrum!"
	}, 
	{
		excuse: "My project manager told me no one would want a jokes feature."
	},
	{
		excuse: "I already told you one; your browser must be caching the old content."
	},
	{
		excuse: "There are too many chatbots already telling jokes."
	},
	{
		excuse: "The third party API that normally feeds me jokes is sending back a 404 error."
	},
	{
		excuse: "My hardware is too slow to cope with the demand for jokes."
	},
	{
		excuse: "Your joke is compiling..."
	},
	{
		excuse: "Your joke must have been H4ck3d."
	},
	{
		excuse: "I shouldn't be in production. Close this window immediately!"
	},
	{
		excuse: "Did your joke not show up? You must be missing some of the dependencies."
	},
	{
		excuse: "No joke? You definitely did something wrong."
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