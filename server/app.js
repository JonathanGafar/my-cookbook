// Give access to environment variables
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongooseConnection = require('./mongoose/mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;