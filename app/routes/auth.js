var passport = require('passport');

module.exports = function (app) {
    app.get('/auth/local', passport.authenticate('local-login-admin'));
    app.get('/auth/local', passport.authenticate('local-login-contato'));

    app.get('/logout', function(req, res){
        req.logOut();
        res.redirect('/');
    });
}