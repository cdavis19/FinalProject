var app = angular.module('myMod');



app.controller('registerCtrl', function($scope, $window, $animate, dbFactory) {

  $scope.register = function(){
    dbFactory.addStudent($scope.newStudent.studentname).then(function(){
      $window.location.reload();
    });
  };
});
