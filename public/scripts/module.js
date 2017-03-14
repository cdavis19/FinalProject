var app = angular.module('myMod', ['ngRoute']);

app.directive("headerDirective", function() {
    return {
        restrict: "EAMC",
        replace: false,
        templateUrl: "views/header.html"
    }
});

app.directive("footerDirective", function() {
    return {
        restrict: "EAMC",
        replace: false,
        templateUrl: "views/footer.html"
    }
});


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/intro', {
        controller: 'viewsController',
        templateUrl: '../views/intro.html'
    })
    .when('/form', {
        controller: 'dbCtrl',
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
    .otherwise({redirectTo: '/'});
    $locationProvider.hashPrefix('');

});
