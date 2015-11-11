angular.module('maissimples').factory('Empresa', function($resource){
    return $resource('/empresas/:id');
});