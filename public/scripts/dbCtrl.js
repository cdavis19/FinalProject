var app = angular.module('myMod');


app.controller('dbCtrl', function($scope, $animate, dbFactory, readingFactory, studentFactory) {
  console.log('dbctrl is running');

  // Gets all the rows from DB
  dbFactory.getStudent().then(function() {
      $scope.students = dbFactory.update();
      console.log("$scope.students=" + $scope.students);
  });

    $scope.student = {};
    $scope.getUser = function() {
        console.log($scope.student);
        var index = $scope.students.map(function(x) {
            return x.studentname;
        }).indexOf($scope.student.studentname);
        $scope.selectedStudent = $scope.students[index];

        studentFactory.sendStudent($scope.selectedStudent);

        if (!$scope.display) {
            $scope.display = !$scope.display;
        } else {
          console.log('something went wrong');
        };

    }

});
