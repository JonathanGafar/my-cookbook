const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../mongoose/models/UserModel');

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
			new User({
				username: req.body.username,
				email: req.body.email,
				password: hashedPassword
			}).save((err, user) => {
				if (err) {
					return res.status(400).json(err);
				}

				return res.json(user);
			});
		}
	}
];