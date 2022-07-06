require('dotenv').config();
const MongoStore = require('connect-mongo');
const session = require('express-session');

const connectionUrl = process.env.NODE_ENV === 'PRODUCTION' ?
	process.env.PRODUCTION_DB_STRING : process.env.DEVELOPMENT_DB_STRING;

const sessionStore = MongoStore.create({
	mongoUrl: connectionUrl,
	collectionName: 'sessions'
});

const userSession = session({
	secret: [process.env.SESSION_SECRET],
	resave: false,
	saveUninitialized: false,
	httpOnly: true,
	unset: 'destroy',
	store: sessionStore,
	rolling: true,
	cookie: {
	  maxAge: 1000 * 60  * 60
	}
});

module.exports = userSession;