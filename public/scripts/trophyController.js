var app = angular.module('myMod');

app.controller('trophyController', function($scope, studentFactory){
  $scope.individual = studentFactory.returnStudent();
    console.log($scope.individual);

   if ($scope.individual.booksread >= 100){
     $('#firstBookTrophy').removeClass('locked');
     console.log($scope.individual.booksread);
       console.log('mission success!!');
   }else{
     }
});
