var passport = require ('passport');

module.exports = function(app) {
    app.post('/loginContato', passport.authenticate('local-login-contato', {
		successRedirect : '/#/homeContato',
		failureRedirect : '/#/loginContato',
		failureFlash : true 
	}));
}
