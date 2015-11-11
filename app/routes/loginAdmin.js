var passport = require ('passport');

module.exports = function(app) {
    var login = app.controllers.loginAdmin;
    
    app.get('/loginAdmin', login.index);
    
    app.post('/loginAdmin', passport.authenticate('local-login', {
		successRedirect : '/#/home',
		failureRedirect : '/#/loginAdmin',
		failureFlash : true 
	}));
}
