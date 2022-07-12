const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../mongoose/models/UserModel');
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'},
	async function(email, password, callback) {
		const user = await User.findOne({email: email});

		if (!user) {
			return callback(null, false, 
				{errorMessage: 'Email address not found'});
		}

		const passwordValid = await bcrypt.compare(password, user.password);
		
		if (passwordValid) {
			return callback(null, user);
		}

		return callback(null, false, {errorMessage: 'Incorrect password'});
	}));

passport.serializeUser(function(user, callback) {
	return callback(null, user.id);
});

passport.deserializeUser(async function(id, callback) {
	try {
		const user = await User.findById(id);
		return callback(null, user);
	} catch(err) {
		console.log(err);
	}
});

module.exports = passport;