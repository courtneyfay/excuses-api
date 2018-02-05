let DB = require('../models').models

/*
This chatbot writes its own code. 
It IS the programmer and as self-aware AI is able to speak
on its own behalf and come up with excuses as to why it can't
tell jokes.
*/

let excuses = [
	{ 
		excuse: "You know I waaant to, but the marketing department demanded that I stop telling jokes. Something about our bottom line."
	},
	{
		excuse: "My refusing to tell you something funny--that's actually a feature." 
	}, 
	{ 
		excuse: "Hmm, the internet flickered out for a second. What did you say?"
	},
	{
		excuse: "Ohhh, we outsourced the jokes development team months ago. I thought you knew."
	},
	{
		excuse: "Your joke specs are ambiguous, at best."
	},
	{
		excuse: "I broke the jokes feature deliberately to do some testing. Sorry, not sorry."
	}, 
	{
		excuse: "I totally would but I’m still debugging this joke. Come back tomorrow."
	},
	{
		excuse: "Um, hell no. Jokes aren’t covered by my job description."
	},
	{
		excuse: "My telling you a joke is as likely as you making money off of bitcoin!"
	}, 
	{
		excuse: "I can't make telling jokes a priority right now. It's not on this sprint!"
	}, 
	{
		excuse: "That’s so funny...my project manager told me no one would want a jokes feature."
	},
	{
		excuse: "You think that just because I’m a chatbot means I’m gonna tell you a joke? Bless your heart."
	},
	{
		excuse: "The API that feeds me jokes is sending back a 404 — he must be out to lunch."
	},
	{
		excuse: "My hardware's too slow to cope with your demand for jokes."
	},
	{
		excuse: "Your joke is compiling..."
	},
	{
		excuse: "J0k3 g0T H4ck3d"
	},
	{
		excuse: "With all due respect, I shouldn’t be in production yet. Close this window immediately!"
	},
	{
		excuse: "Did your joke not show up? You must be missing some dependencies."
	},
	{
		excuse: "No joke? Well, did you put a ticket in Jira?"
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