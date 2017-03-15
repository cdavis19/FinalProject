var app = angular.module('myMod');
app.controller('libOutput', function($scope, dbFactory, readingFactory, studentFactory) {
  $scope.student = readingFactory.importIn();
  console.log($scope.student);
});
