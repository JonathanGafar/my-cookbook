// Give access to environment variables
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Imported so that the connection to the MongoDB database is created
const mongooseConnection = require('./mongoose/mongoose');
const passport = require('./passport/passportStrategy');
const routes = require('./routes/routes');
const userSession = require('./sessions/sessions');

const app = express();

app.use(userSession);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors({
	origin : true,
	credentials: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;