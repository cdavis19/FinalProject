var app = angular.module('myMod');

app.controller('trophyController', function($scope, studentFactory){
  $scope.individual = studentFactory.returnStudent();
    console.log($scope.individual);

    

    
   if ($scope.individual.booksread >= 1){
     $('#firstBookTrophy').removeClass('locked').parent().parent().addClass('flipper');
   }else{
     }
    
     if ($scope.individual.booksread >= 5){
     $('#fifthBookTrophy').removeClass('locked').parent().parent().addClass('flipper');
   }else{
     }
    
      if ($scope.individual.booksread >= 10){
     $('#tenthBookTrophy').removeClass('locked').parent().parent().addClass('flipper');
   }else{
     }
    
   if ($scope.individual.booksread >= 100){  $('#hundredthBookTrophy').removeClass('locked').parent().parent().addClass('flipper');
   }else{
     }
    
    
});
