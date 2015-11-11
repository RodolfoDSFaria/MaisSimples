angular.module('maissimples').controller('EmpresasController', function($scope, Empresa){
    
    $scope.empresas = [];
    
    $scope.filtro ='';
    
    $scope.mensagem = {texto: ''};
    
    function buscaEmpresas() {
        Empresa.query(
            function(empresas) {
                $scope.empresas = empresas;
                $scope.mensagem ={};
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista'
                };
            }
           );
    }
    buscaEmpresas();
    
    $scope.remove = function(empresa) {
        Empresa.delete({id: empresa._id},
            buscaEmpresas,
            function(erro){
                $scope.mensagem = {
                    texto: 'Não foi possível remover a Empresa'
                };    
            console.log(erro);
            }
        );
    };
    
});