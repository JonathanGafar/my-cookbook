const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../mongoose/models/UserModel');
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'},
	function(email, password, callback) {
		User.findOne({email: email}).then(function(user) {
			if (!user) {
				return callback(null, false);
			}

			bcrypt.compare(password, user.password, function(err, result) {
				if (result) {
					return callback(null, user);
				}
	
				return callback(null, false);
			});
		});

	}));

passport.serializeUser(function(user, callback) {
	return callback(null, user.id);
});

passport.deserializeUser(function(id, callback) {
	User.findById(id).then(function(user) {
		return callback(null, user);
	}).catch(function(err) {
		console.log(err);
	});
});

module.exports = passport;