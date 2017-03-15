var app = angular.module('myMod');
app.controller('libInput', function($scope, readingFactory, myFactory, $location){
$scope.importIn = function(student) {
  console.log(student);
readingFactory.exportTo(student);
  $location.path('/formOutput');
};
});
