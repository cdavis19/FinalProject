var app = angular.module('myMod');

app.controller('dbCtrl', function($scope, myFactory){
  myFactory.getStudent().then(function(){
    $scope.students = myFactory.update();
    // console.log($scope.students);
  });
  $scope.student = {};
  $scope.getUser = function(){
    // console.log($scope.student.name);
    var enteredName = $scope.students.map(function(x){
      return x.name;
    }).indexOf($scope.student.name);
    var selectedStudent = $scope.students[enteredName];
    console.log(selectedStudent);
  }
});
