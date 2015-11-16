angular.module('maissimples', ['ngRoute', 'ngResource']).config(function($routeProvider, $httpProvider) {
    
    $httpProvider.interceptors.push('meuInterceptor');
    
    $routeProvider.when('/', {
        templateUrl: 'partials/index.html'
    });
    
    $routeProvider.when('/auth', {
        templateUrl: 'partials/auth.html'
    });
    
    $routeProvider.when('/loginAdmin', {
        templateUrl: 'partials/loginAdmin.html',

    });
    
    $routeProvider.when('/loginContato', {
        templateUrl: 'partials/loginContato.html'

    });
    
    $routeProvider.when('/homeAdmin', {
        templateUrl: 'partials/homeAdmin.html',
        controller: 'HomeAdminController'

    });
        $routeProvider.when('/homeContato', {
        templateUrl: 'partials/homeContato.html',
        controller: 'HomeContatoController'
    });
    
    $routeProvider.when('/chatContato', {
        templateUrl: 'partials/chatContato.html',
    });
        
    $routeProvider.when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
    });
    
    $routeProvider.when('/contato', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });
        
    $routeProvider.when('/contato/:contatoId', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });
        
    $routeProvider.when('/empresas', {
        templateUrl: 'partials/empresas.html',
        controller: 'EmpresasController'
    });
    
    $routeProvider.when('/empresa', {
        templateUrl: 'partials/empresa.html',
        controller: 'EmpresaController'
    });
        
    $routeProvider.when('/empresa/:empresaId', {
        templateUrl: 'partials/empresa.html',
        controller: 'EmpresaController'
    });
});