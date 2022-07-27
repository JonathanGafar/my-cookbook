/* This file contains controller functions that are related to creating, reading, 
updating, or deleting a recipe */

const {body, validationResult} = require('express-validator');
const {v4 : uuidv4} = require('uuid');

const User = require('../mongoose/models/UserModel');
/* Function to upload photos that are in the request object (in the 
	fieldname photos) to the S3 bucket */
const {upload, deletePhoto} = require('../S3/S3');


const uploadPhotos = upload.array('photos', 3);

exports.saveRecipe = [
	function(req, res, next) {
		/* uploadPhotos will be ran when a POST request is sent to
		/api/users/:id/recipes. Therefore, the user must not only be authenticated, 
		but must also be posting the recipe only to /api/users/<their own id>/recipes.
		An error should be returned if the user tries posting a recipe to 
		/api/users/<someone else's id>/recipes */
		if (req.user._id.toString() === req.params.id) {
			uploadPhotos(req, res, function(err) {	
				if (err) {
					return res.json({
						errorMessage: err.message
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
		} else {
			return res.status(400).json({
				errorMessage: 'You cannot post a recipe here'
			});
		}
	},
	
	body('name', 'You  must enter a recipe name').trim().isLength({min: 1}).escape(),
	body('description').escape(),
	body('ingredients.*').escape(),
	body('recipeSteps.*').escape(),

	async function(req, res, next) {
		const errors = validationResult(req);

		if (!(errors.isEmpty())) {
			const errorObject = {};
			errors.array().forEach(error => {
				errorObject[error.param] = error.msg;
			});

			/* Delete the photos that Multer just uploaded if there is a
			validation error */
			req.files.forEach(photo => {
				deletePhoto(photo.key);
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
			
			try {
				const updatedUser = await User.findByIdAndUpdate(req.user._id.toString(),
					user, {new: true});

				return res.json({
					username: updatedUser.username,
					recipes: updatedUser.recipes,
					id: updatedUser._id.toString()
				});
			} catch(err) {
				/* Delete the photos that Multer just uploaded if there is an error
				saving the recipe to MongoDB */
				req.files.forEach(photo => {
					deletePhoto(photo.key);
				});

				return res.status(500).json({
					errorMessage: 
						`An error occured. The recipe was not saved. Please try again.`
				});
			}
		} else {
			return res.status(400).json({
				errorMessage: 'You cannot post a recipe here'
			});
		}
	}
];