module.exports = function(app) {
    var sanitize = require('mongo-sanitize');
    
    var Contato = app.models.contato;
    
    var controller = {};
    
    controller.listaHome = function(req, res) {
        var promise = Contato.find().exec()
            .then(
                function(contatos){
                    res.json(contatos);
                },
                function(erro){
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
    };
    
        return controller;
}