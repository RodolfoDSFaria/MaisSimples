module.exports = function(app) {
    var sanitize = require('mongo-sanitize');
    
    var User = app.models.user;
    
    var controller = {};
    
    controller.listaHome = function(req, res) {
        var promise = User.find().exec()
            .then(
                function(users){
                    res.json(users);
                },
                function(erro){
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
    };
    
        return controller;
}