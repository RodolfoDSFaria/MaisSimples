angular.module('maissimples').factory('User', function($resource){
    return $resource('/loginAdmin/:id');
});