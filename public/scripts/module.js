var app = angular.module('myMod', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/intro', {
        controller: 'viewsController',
        templateUrl: '../views/intro.html'
    })
    .otherwise({redirectTo: '/'});
    $locationProvider.hashPrefix('');
});