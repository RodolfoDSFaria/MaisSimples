var mongoose = require('mongoose');

module.exports = function(uri) {
    mongoose.connect(uri);
    
    mongoose.connection.on('connected', function() {
        console.log('Conectado em '+ uri);
    });
    
    mongoose.connection.on('disconnected', function() {
        console.log('Desconectado de '+ uri);
    });
    
    mongoose.connection.on('error', function(erro) {
        console.log('Erro na conexão' + erro);
    });
    
    process.on('SIGINT', function(){
        mongoose.connection.close(function() {
            console.log('Desconectado.');
            process.exit(0);
        });
    });
}