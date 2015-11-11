module.exports = function(app) {
    var sanitize = require('mongo-sanitize');
    
    var Empresa = app.models.empresa;
    
    var controller = {};
    
    controller.listaEmpresas = function(req, res) {
        var promise = Empresa.find().exec()
            .then(
                function(empresas){
                    res.json(empresas);
                },
                function(erro){
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
    };
    
    controller.obtemEmpresas = function(req, res) {
        var _id = req.params.id;
        Empresa.findById(_id).exec()
        .then(
            function(empresa) {
                if(!empresa) throw new Error("Empresa não encontrada");
                res.json(empresa);
            },
            function(erro) {
                console.log(error);
                res.status(404).json(erro);
            }
        );
    };
    
    controller.removeEmpresa = function(req, res) {
        var _id = sanitize(req.params.id);
        Empresa.remove({"_id": _id}).exec()
        .then(
            function(){
                res.status(204).end();
            },
            function(erro){
                return console.error(erro);
            }
        );
    };
    
    controller.salvaEmpresa = function (req, res) {
        var _id = req.body._id;
        
        var dados = {
            "nome" : req.body.nome,
            "email" : req.body.email,
            "cnpj" : req.body.cnpj
        };
        
        if(_id){
            Empresa.findByIdAndUpdate(_id, dados).exec()
            .then(
                function(empresa){
                    res.json(empresa);
                },
                function(erro){
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        }else {
            Empresa.create(dados)
            .then(
                function(empresa) {
                    res.status(201).json(empresa);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                }
            );
        }
    };
        return controller;
}