function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else{
        res.status('401').json('Não autorizado');
    }
}

var passport = require('passport');

module.exports = function(app) {
    var controller = app.controllers.contato;
    
    app.route('/contatos').get(isLoggedIn, controller.listaContatos).post(passport.authenticate('local-signup-contato', {
		successRedirect : '/#/contato',
		failureRedirect : '/#/contato',
		failureFlash : true 
	}));
    
    app.route('/contatos/:id').get(isLoggedIn, controller.obtemContatos).delete(isLoggedIn, controller.removeContato);
    
};