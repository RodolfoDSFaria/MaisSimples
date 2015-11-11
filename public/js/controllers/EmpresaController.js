angular.module('maissimples').controller('EmpresaController', function($scope, $routeParams, Empresa){
    
    if($routeParams.empresaId) {
        Empresa.get({id: $routeParams.empresaId}, 
                function(empresa){
                    $scope.empresa = empresa;
                 },
                function(erro){
                    $scope.mensagem = {
                        texto: 'Empresa não existe.'
                    };
                 }
                );
    }else{
        $scope.empresa = {};
    }
    
    $scope.empresa = new Empresa();
    
    $scope.salva = function() {
      $scope.empresa.$save()
        .then(function() {
          $scope.mensagem = { texto: 'Salvo com sucesso' };
          //limpa o formulário
          $scope.empresa = new Empresa();
      })
      .catch(function(erro){
        $scope.mensagem = { texto: 'Não foi possível salvar '};
      })
    };
    
    Empresa.query(function(empresas) {
        $scope.empresas = empresas;
    });
});
