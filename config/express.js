var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var helmet = require('helmet');

module.exports = function() {
    var app = express();
    app.set('port', 8080);
    
    //Middlewares
    
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');    
    app.set('views', './app/views');
    app.use(express.static('./public')); 
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());    
    
    //Middlewares de conexão
    app.use(cookieParser());
    app.use(session({secret: 'bemmaissimples', resave: true, saveUninitialized: true}));
    app.use(passport.initialize());
    app.use(passport.session());
    
    //Middlewares de segurança
    app.use(helmet.hidePoweredBy({setTo: 'PHP 5.5.14'}));
    app.use(helmet.xframe());
    app.use(helmet.xssFilter());
    app.use(helmet.nosniff());
    
    //Carregamentos de rotas
    load('models', {cwd:'app'}).then ('controllers').then('routes').into(app);
    
    app.get('*', function(req, res){
        res.status(404).render('404');
    });
    
    return app;
}