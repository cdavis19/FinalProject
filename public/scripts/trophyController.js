var app = angular.module('myMod');

app.controller('trophyController', function($scope, studentFactory){
  $scope.individual = studentFactory.returnStudent();
    console.log($scope.individual);

   if ($scope.individual.booksread >= 100){
     $('#hundredthBookTrophy').removeClass('locked');
     console.log($scope.individual.booksread);
       
   }else{
     }
    
    if ($scope.individual.booksread >= 10){
     $('#tenthBookTrophy').removeClass('locked');
     console.log($scope.individual.booksread);
     
   }else{
     }
    
    if ($scope.individual.booksread >= 5){
     $('#fifthBookTrophy').removeClass('locked');
     console.log($scope.individual.booksread);
    
   }else{
     }
    
   if ($scope.individual.booksread >= 1){
     $('#firstBookTrophy').removeClass('locked');
     console.log($scope.individual.booksread);
       console.log('mission success!!');
   }else{
     }
    
    
    
});
