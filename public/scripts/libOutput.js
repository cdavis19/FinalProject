var app = angular.module('myMod');

//this function is for the madlibs tracking page
app.controller('libOutput', function($scope, dbFactory, readingFactory, studentFactory) {
    $scope.student = readingFactory.importIn();
    console.log($scope.student);
});
