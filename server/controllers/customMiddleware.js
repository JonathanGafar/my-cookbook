// Confirm user is logged in
exports.confirmUser = function(req, res, next) {
	if (req.user) {
		return next();
	} else {
		return res.json({
			errorMessage: `You are not authorized to access this page. 
			Please log in.`
		});
	}
};