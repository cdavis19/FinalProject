var app = angular.module('myMod');
//taking in an empty object from the dbctrl
app.factory('studentFactory', function() {

    var studentInfo = {};

    return {
        sendStudent: sendStudent,
        returnStudent: returnStudent
    }


    //passing data between two controllers
    function sendStudent(selectedStudent) {

        studentInfo = selectedStudent;
    }

    function returnStudent() {
        return studentInfo;
    }

});
