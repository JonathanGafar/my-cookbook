const express = require('express');
const router = require('express').Router();

const authControllers = require('../controllers/authControllers'); 

router.post('/users', authControllers.signupUser);
router.post('/login', authControllers.loginUser);
router.get('/users/:id', authControllers.confirmUser, function(req, res, next) {
	return next();
});

module.exports = router;