var passport = require('passport');
var bcrypt   = require('bcrypt-nodejs');
var LocalStrategy   = require('passport-local').Strategy;
var mongoose = require('mongoose');


module.exports = function() {
    var Admin = mongoose.model('Admin');
    var Contato = mongoose.model('Contato');
    
    passport.serializeUser(function(admin, done) {
        done(null, admin.id);
    });

    passport.deserializeUser(function(id, done) {
        Admin.findById(id, function(err, admin) {
            done(err, admin);
        });
    });
    
    passport.use('local-signup-contato', new LocalStrategy({

        usernameField : 'email',
        passwordField : 'senha',
        passReqToCallback : true 
    },
    function(req,  email, senha, done) {
        var _id = req.body._id;
        
        var dados = {
            "nome" : req.body.nome,
            "email" : req.body.email,
            "senha" : req.body.senha,
            "empresa" : req.body.empresa
        };

        Contato.findOne({ 'email' :  email }, function(err, user) {

            if (err)
                return done(err);
            if(_id){
            Contato.findByIdAndUpdate(_id, dados).exec()
            .then(
                function(contato){
                    res.json(contato);
                    res.render('contatos');
                },
                function(erro){
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
            } else {

                var newContato            = new Contato();
                
                newContato.nome    = req.body.nome;
                newContato.email    = email;
                newContato.senha = newContato.generateHash(senha);
                newContato.empresa = req.body.empresa;
        
                newContato.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newContato);
                });
            }

        });

    }));

    passport.use('local-login-admin', new LocalStrategy({

        usernameField : 'email',
        passwordField : 'senha',
        passReqToCallback : true
    },
                                                  
    function(req, email, senha, done) { 
        Admin.findOne({ 'email' :  email }, function(err, user) {

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
        });

    }));
        
    
    passport.use('local-login-contato', new LocalStrategy({

        usernameField : 'email',
        passwordField : 'senha',
        passReqToCallback : true
    },
                                                  
    function(req, email, senha, done) { 
        Contato.findOne({ 'email' :  email }, function(err, user) {

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