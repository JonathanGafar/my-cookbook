const User = require('../mongoose/models/UserModel');
const Recipe = require('../mongoose/models/RecipeModel');

exports.saveRecipe = async function(req, res, next) {
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

	return res.json({
		errorMessage: 'You cannot post a recipe here'
	});
};