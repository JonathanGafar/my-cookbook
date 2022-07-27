/* This file contains controller functions that are related to creating, reading, 
updating, or deleting a recipe */

const {body, validationResult} = require('express-validator');
const {v4 : uuidv4} = require('uuid');

const User = require('../mongoose/models/UserModel');
/* Function to upload photos that are in the request object (in the 
	fieldname photos) to the S3 bucket */
const uploadPhotos = require('../S3/S3Config').array('photos', 3);

exports.saveRecipe = [
	function(req, res, next) {
		uploadPhotos(req, res, function(err) {	
			if (err) {
				return res.json({
					success: 'false',
					errors: {
						title: 'Image Upload Error',
						detail: err.message,
						error: err
					}
				});
			}

			req.photos = [];

			if (req.files) {
				req.files.forEach(photoObj => {
					req.photos.push(photoObj.key);
				});
			}

			return next();
		});
	},
	
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
				id: uuidv4(),
				name: req.body.name,
				description: req.body.description,
				ingredients: JSON.parse(req.body.ingredients),
				recipeSteps: JSON.parse(req.body.recipeSteps),
				photos: req.photos
			};

			const user = new User({
				username: req.user.username,
				email: req.user.email,
				password: req.user.password,
				recipes: [...req.user.recipes, recipe],
				_id: req.user._id.toString()
			});

			const updatedUser = await User.findByIdAndUpdate(req.user._id.toString(),
				user, {new: true});

			return res.json({
				username: updatedUser.username,
				recipes: updatedUser.recipes,
				id: updatedUser._id.toString()
			});
		}

		return res.status(400).json({
			errorMessage: 'You cannot post a recipe here'
		});
	}
];