const router = require('express').Router();

const authController = require('../controllers/authController');
const recipeController = require('../controllers/recipeController');

// Authentication GET routes
router.get('/userid', authController.getUserID);

// Authentication POST routes
router.post('/users', authController.signupUser);
router.post('/login', authController.loginUser);

// User content GET routes
router.get('/users/:id', authController.confirmUser, function(req, res, next) {
	return res.send('just testing');
});

// User content POST routes
router.post('/users/:id/recipes', authController.confirmUser,
	recipeController.saveRecipe);



module.exports = router;