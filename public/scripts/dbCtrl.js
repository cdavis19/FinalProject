var app = angular.module('myMod');

app.controller('dbCtrl', function($scope, $animate, myFactory){
  myFactory.getStudent().then(function(){
    $scope.students = myFactory.update();
    console.log("$scope.students="+ $scope.students);
  });

  $scope.student = {};
  $scope.getUser = function(){
    console.log($scope.student);
    var enteredName = $scope.students.map(function(x){
      return x.name;
    }).indexOf($scope.student.name);
    $scope.selectedStudent = $scope.students[enteredName];
    if (!$scope.display){
      $scope.display = !$scope.display;
    }else{

    };
    console.log("Selected student is"+$scope.selectedStudent);
  }
});
