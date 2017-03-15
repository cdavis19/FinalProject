var app = angular.module('myMod');

app.controller('libInput', function($scope, dbFactory, readingFactory, studentFactory, $location){

  var updatedStudent = studentFactory.returnStudent();

  $scope.updateBooks = function(student) {
    console.log(student);
    readingFactory.exportTo(student);
    updatedStudent.booksread++;
    dbFactory.updateBooksRead(updatedStudent).then(function() {
      $location.path('/formOutput');
    });

  };

});
