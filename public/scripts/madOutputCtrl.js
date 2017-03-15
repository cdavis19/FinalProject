var app = angular.module('myMod');
app.controller('libOutput', function($scope, readingFactory, myFactory, studentFactory) {
$scope.student = readingFactory.importIn();
console.log($scope.student);
});
