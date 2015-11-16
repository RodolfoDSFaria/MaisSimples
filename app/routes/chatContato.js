function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else{
        res.status('401').json('Não autorizado');
    }
}

module.exports = function(app) {

app.get('/chatContato', function(req, res){
        res.render('chatContato.html');
    });
}