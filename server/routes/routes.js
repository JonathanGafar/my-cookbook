const express = require('express');
const router = require('express').Router();

const authControllers = require('../controllers/authControllers'); 
const customMiddleware = require('../controllers/customMiddleware');

router.post('/users', authControllers.signupUser);
router.post('/login', authControllers.loginUser);
router.get('/users/:id', customMiddleware.confirmUser, function(req, res, next) {
	return next();
});

module.exports = router;