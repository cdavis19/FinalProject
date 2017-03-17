//initialize module
var app = angular.module('myMod');


//initializes dbCtrl
app.controller('dbCtrl', function($scope, $animate, dbFactory, readingFactory, studentFactory, $location) {
    var date = new Date();
    $scope.year = date.getFullYear();

    // Gets all the rows from DB
    dbFactory.getStudent().then(function() {
        $scope.students = dbFactory.update();
        console.log("$scope.students=" + $scope.students);
    });
    //taking the name as a variable called student in the ng-model and using that name to search our database, returns the entire row based on that
    $scope.student = {};
    $scope.getUser = function() {
        //runs .map on $scope.students array looks through it pulls data from it, and creates a new array
        var index = $scope.students.map(function(x) {
            //array with student names
            return x.studentname;
            //finds index of each name and initializes selectedstudent with the value of the item in $scope.students with that index
            //runs map on each item in the array, spits out student name, if student name matches the name typed, it assigns selectedstudent with the value of the item in $scope.students with that index
        }).indexOf($scope.student.studentname);
        $scope.selectedStudent = $scope.students[index];
        //uses sendStudent method from studentFactory on selectedStudent object
        studentFactory.sendStudent($scope.selectedStudent);
        //displays the message shown on login
        if (!$scope.loginConfirmMessage) {
            $scope.loginConfirmMessage = !$scope.loginConfirmMessage;
        } else {

        };

        //functions to remove login button and register button using ngShow and ngHide
        if (!$scope.loginButton) {
            $scope.loginButton = !$scope.loginButton;
            $scope.registerButton = !$scope.registerButton;

        } else {

        };

        $location.path('/form');

    }





});
