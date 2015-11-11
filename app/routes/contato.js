function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else{
        res.status('401').json('Não autorizado');
    }
}
module.exports = function(app) {
    var controller = app.controllers.contato;
    
    app.route('/contatos').get(isLoggedIn, controller.listaContatos).post(isLoggedIn, controller.salvaContato);
    app.route('/contatos/:id').get(isLoggedIn, controller.obtemContatos).delete(isLoggedIn, controller.removeContato);
    
};