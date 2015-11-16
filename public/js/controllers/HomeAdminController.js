angular.module('maissimples').controller('HomeAdminController', function($scope, $resource){
    
    $scope.users = [];
    var User = $resource('/homeAdmin/:id');
    
    function buscaUsers() {
        User.query(
            function(users) {
                $scope.users = users;
                console.log(users);
                $scope.mensagem ={};
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista'
                };
            }
           );
    }
    buscaUsers();
});