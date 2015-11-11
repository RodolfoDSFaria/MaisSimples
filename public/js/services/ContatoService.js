angular.module('maissimples').factory('Contato', function($resource){
    return $resource('/contatos/:id');
});