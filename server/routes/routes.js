const express = require('express');
const router = require('express').Router();

const authControllers = require('../controllers/authControllers'); 

router.post('/users', authControllers.signupUser);

module.exports = router;