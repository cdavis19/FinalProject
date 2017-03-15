var app = angular.module('myMod');


app.controller('dbCtrl', function($scope, $animate, myFactory, readingFactory) {

    myFactory.getStudent().then(function() {
        $scope.students = myFactory.update();
        console.log("$scope.students=" + $scope.students);
    });

    $scope.student = {};
    $scope.getUser = function() {
        console.log($scope.student);
        var index = $scope.students.map(function(x) {
            return x.studentname;
        }).indexOf($scope.student.studentname);
        $scope.selectedStudent = $scope.students[index];



        if (!$scope.display) {
            $scope.display = !$scope.display;
        } else {

        };
        console.log($scope.selectedStudent);
    }
});
