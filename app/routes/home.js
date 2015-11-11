function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else{
        res.status('401').json('Não autorizado');
    }
}

module.exports = function(app) {
    var controller = app.controllers.home;
    app.route('/home').get(isLoggedIn, controller.listaHome)
};