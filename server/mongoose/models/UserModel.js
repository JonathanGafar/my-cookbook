const mongoose = require('mongoose');

const User = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minLength: 1
	},
	email: {
		type: String,
		unique: true,
		required: true,
		minLength: 1
	},
	password: {
		type: String,
		required: true,
		/* minLength is only 1 because even if the password is too short, once
		hashed, it will be longer than the required 8 characters. Length
		validation will occur on the front end and also just before the password
		is hashed  */ 
		minLength: 1
	},
	recipes: {
		type: [Map],
		ref: 'Recipes',
		required: true
	}
});

module.exports = mongoose.model('user', User);