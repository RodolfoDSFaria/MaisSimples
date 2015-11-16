function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else{
        res.status('401').json('Não autorizado');
    }
}

module.exports = function(app) {
    var controller = app.controllers.homeContato;
    app.route('/homeContato').get(isLoggedIn, controller.listaHome)
};