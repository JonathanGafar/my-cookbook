// Give access to environment variables
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;