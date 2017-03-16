var app = angular.module('myMod');


app.controller('dbCtrl', function($scope, $animate, dbFactory, readingFactory, studentFactory) {
  console.log('dbctrl is running');

  // Gets all the rows from DB
  dbFactory.getStudent().then(function() {
      $scope.students = dbFactory.update();
      console.log("$scope.students=" + $scope.students);
  });
//taking the name as a variable called student in the ng-model and using that name to search our database, returns the entire row based on that
    $scope.student = {};
    $scope.getUser = function() {
        console.log($scope.student);
        var index = $scope.students.map(function(x) {
            return x.studentname;
        }).indexOf($scope.student.studentname);
        $scope.selectedStudent = $scope.students[index];

        studentFactory.sendStudent($scope.selectedStudent);
//displays the message shown on login
        if (!$scope.display) {
            $scope.display = !$scope.display;
        } else {
          console.log('something went wrong');
        };

    }

});
