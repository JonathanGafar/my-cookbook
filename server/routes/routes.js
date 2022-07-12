const express = require('express');
const router = require('express').Router();

const authController = require('../controllers/authController');
const recipeController = require('../controllers/recipeController');
const customMiddleware = require('../controllers/customMiddleware');

router.post('/users', authController.signupUser);
router.post('/login', authController.loginUser);
router.get('/users/:id', customMiddleware.confirmUser, function(req, res, next) {
	return next();
});
router.post('/users/:id/recipes', customMiddleware.confirmUser,
	recipeController.saveRecipe);

module.exports = router;