const mongoose = require('mongoose');

const Recipe = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minLength: 1
	},
	description: {
		type: String,
		required: false,
	},
	ingredients: {
		type: [String],
		required: false
	},
	recipeSteps: {
		type: [String],
		required: false
	}
}, {
	autoCreate: false
});

module.exports = mongoose.model('recipe', Recipe);