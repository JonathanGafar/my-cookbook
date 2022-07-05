const mongoose = require('mongoose');
const User = require('./models/UserModel');
require('dotenv').config();

const connectionUrl = 	process.env.NODE_ENV === 'PRODUCTION' ?
	process.env.PRODUCTION_DB_STRING : process.env.DEV_DB_STRING;

let connection = mongoose.connect(connectionUrl, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

module.exports = connection;