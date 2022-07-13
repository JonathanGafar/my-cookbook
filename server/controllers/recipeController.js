const {body, validationResult} = require('express-validator');

const User = require('../mongoose/models/UserModel');

exports.saveRecipe = [
	body('name', 'You  must enter a recipe name').trim().isLength({min: 1}).escape(),
	body('description').escape(),
	body('ingredeints.*').escape(),
	body('recipeSteps.*').escape(),
	async function(req, res, next) {
		const errors = validationResult(req);

		if (!(errors.isEmpty())) {
			const errorObject = {};
			errors.array().forEach(error => {
				errorObject[error.param] = error.msg;
			});

			return res.status(400).json(errorObject);
		} 

		if (req.user._id.toString() === req.params.id) {
			const recipe = {
				name: req.body.name,
				description: req.body.description,
				ingredients: req.body.ingredients,
				recipeSteps: req.body.recipeSteps
			};

			const user = new User({
				name: req.user.name,
				email: req.user.email,
				password: req.user.password,
				recipes: [...req.user.recipes, recipe],
				_id: req.user._id.toString()
			});

			const updatedUser = await User.findByIdAndUpdate(req.user._id.toString(),
				user, {new: true});

			return res.json(updatedUser);
		}

		return res.status(400).json({
			errorMessage: 'You cannot post a recipe here'
		});
	}
];