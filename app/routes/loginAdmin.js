var passport = require ('passport');

module.exports = function(app) {
    app.post('/loginAdmin', passport.authenticate('local-login-admin', {
		successRedirect : '/#/homeAdmin',
		failureRedirect : '/#/loginAdmin',
		failureFlash : true 
	}));
}
