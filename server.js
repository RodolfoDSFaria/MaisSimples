var http = require('http');
var express = require('express');
var passport = require('passport');

var app = require('./config/express')(app);

require('./config/database')('mongodb://localhost/maissimples');

require('./config/passport')(passport);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Servidor iniciado na porta ' + app.get('port'));
});