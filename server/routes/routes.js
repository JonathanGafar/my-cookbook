const router = require('express').Router();

const authController = require('../controllers/authController');
const recipeController = require('../controllers/recipeController');

// Authentication POST routes
router.post('/users', authController.signupUser);
router.post('/login', authController.loginUser);

// User content GET routes
router.get('/users/:id', authController.isAuthenticated, function(req, res, next) {
	return res.send('just testing');
});

// User content POST routes
router.post('/users/:id/recipes', authController.isAuthenticated,
	recipeController.saveRecipe);



module.exports = router;