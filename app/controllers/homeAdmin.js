module.exports = function(app) {
    var sanitize = require('mongo-sanitize');
    
    var Admin = app.models.admin;
    
    var controller = {};
    
    controller.listaHome = function(req, res) {
        var promise = Admin.find().exec()
            .then(
                function(admins){
                    res.json(admins);
                },
                function(erro){
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
    };
    
        return controller;
}