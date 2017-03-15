var app = angular.module('myMod');

app.controller('trophyController', function($scope, studentFactory){
  $scope.individual = studentFactory;

  // if ($scope.selectedStudent.booksread >= 100){
  //   $('#firstBookTrophy').removeClass('locked');
  //   console.log($scope.selectedStudent.booksread);
  //     console.log('mission success!!');
  // }else{
  //   }
});
