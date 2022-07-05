require('dotenv').config();
const mongoose = require('mongoose');
/* Imported here so that UserModel.js is executed, thus creating its MongoDB
document collection */
const User = require('./models/UserModel');

const connectionUrl = process.env.NODE_ENV === 'PRODUCTION' ?
	process.env.PRODUCTION_DB_STRING : process.env.DEVELOPMENT_DB_STRING;

let connection = mongoose.connect(connectionUrl, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

module.exports = connection;