var app = require('./config/express')(app);

var http = require('http').Server(app);
var express = require('express');
var passport = require('passport');
var io = require('socket.io')(http);


require('./config/database')('mongodb://localhost/maissimples');

require('./config/passport')(passport);

io.on('connection', function(socket){
  socket.on('toServer', function (data) {
    var msg = data.nome+":"+data.msg+"</br>";
    socket.emit('toClient', msg);
    socket.broadcast.emit('toClient', msg);
  });
});

http.listen(app.get('port'), function() {
    console.log('Servidor iniciado na porta ' + app.get('port'));
    
});