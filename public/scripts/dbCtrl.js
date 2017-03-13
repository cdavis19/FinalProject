var app = angular.module('myMod');

app.controller('dbCtrl', function($scope, myFactory){
  myFactory.getStudent().then(function(){
    $scope.student = myFactory.update();
    console.log($scope.student);
  });
})
