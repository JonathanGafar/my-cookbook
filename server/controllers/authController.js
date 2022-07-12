const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../mongoose/models/UserModel');
const passport = require('../passport/passportStrategy');

exports.signupUser = [
	body('username', 'You must enter a username').trim().isLength({min: 1}).escape(),
	body('email', 'You must enter an email').trim().isLength({min: 1}).escape(),
	body('password', 'Your password must be at least 8 characters long')
		.trim().isLength({min: 8}).escape(),
	body('confirmedPassword').trim().escape(),


	async function(req, res, next) {
		const errors = validationResult(req);

		if (req.body.password !== req.body.confirmedPassword) {
			errors.errors.push({
				value: req.body.confirmedPassword,
				msg: 'Passwords do not match',
				param: 'confirmedPassword',
				location: 'body'
			});
		}

		if (!(errors.isEmpty())) {
			const errorObject = {};
			errors.array().forEach(error => {
				errorObject[error.param] = error.msg;
			});

			return res.status(400).json(errorObject);
		} else {
			const hashedPassword = await bcrypt.hash(req.body.password, 10);
			const user = new User({
				username: req.body.username,
				email: req.body.email,
				password: hashedPassword,
				recipes: []
			});
			
			try {
				await user.save();
				return res.json(user);
			} catch(err) {
				switch(err.code) {
				case 11000:
					return res.status(400).json({
						errorMessage:
									`This email address already has an account 
										associated with it.`
					});
				default:
					return res.status(400).json(err);
				}
			}
		}
	}
];

/* The password input is not sanitized so as to avoid possibly changing what the 
user submitted for their password. There is no harm in this, since the hashed 
password is first retrieved from the MongoDB database by querying by the user's 
email address. Once the hashed password is retrieved, a string-based comparison 
is performed with the hashed version of the password submitted by the user. 
So no query involving unsanitized user input is ever performed. */

exports.loginUser = [
	body('email').trim().escape(),
	function(req, res, next) {
		passport.authenticate('local', {}, function(err, user, info) {
			if (err) {
				return next(err);
			}
	
			if (!user) {
				return res.json(info);
			}
			
			/* We are using a callback here instead of the async-await pattern 
			because the req.login function will give an error if not supplied 
			a callback. */
			req.login(user, function(err){
				if (err) {
					return next(err);
				}
	
				return res.json(user);
			});
		})(req, res, next);
	}
];