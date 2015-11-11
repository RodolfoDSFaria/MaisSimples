var passport = require('passport');
var bcrypt   = require('bcrypt-nodejs');

var LocalStrategy   = require('passport-local').Strategy;
var mongoose = require('mongoose');


module.exports = function() {
    var User = mongoose.model('User');

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-login', new LocalStrategy({

        usernameField : 'email',
        passwordField : 'senha',
        passReqToCallback : true
    },
                                                  
    function(req, email, senha, done) { 
        User.findOne({ 'local.email' :  email }, function(err, user) {

          if (err) {
              console.log('Erro ao conectar.');
              return done(err); 
          }
          if (!user) {
              console.log('Usuário inválido.');
              return done(null, false); 
          }
          if (!user.validPassword(senha)) {
              console.log('Senha inválida.');
              return done(null, false); 
          }
          return done(null, user);


            return done(null, user);
        });

    }));

};