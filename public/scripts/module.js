var app = angular.module('myMod', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/intro', {
        controller: 'viewsController',
        templateUrl: '../views/intro.html'
    })
    .when('/form', {
        controller: 'libInput',
        templateUrl: '../views/form.html'
    })
    .when('/login', {
        controller: 'viewsController',
        templateUrl: '../views/login.html'
    })
      .when('/trophyroom', {
        controller: 'viewsController',
        templateUrl: '../views/trophyroom.html'
    })
    .when('/formOutput', {
      controller: 'libOutput',
      templateUrl: '../views/formOutput.html'
    })

    .otherwise({redirectTo: '/'});
    $locationProvider.hashPrefix('');

});
