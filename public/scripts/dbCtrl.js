var app = angular.module('myMod');

app.controller('dbCtrl', function($scope, myFactory, readingFactory){
  myFactory.getStudent().then(function(){
    $scope.students = myFactory.update();
    console.log($scope.students);
  });
});
