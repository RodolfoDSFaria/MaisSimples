function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else{
        res.status('401').json('Não autorizado');
    }
}

module.exports = function(app) {
    var controller = app.controllers.empresa;
    
    app.route('/empresas').get(isLoggedIn, controller.listaEmpresas).post(isLoggedIn, controller.salvaEmpresa);
    app.route('/empresas/:id').get(isLoggedIn, controller.obtemEmpresas).delete(isLoggedIn, controller.removeEmpresa);
    
};