var app = angular.module('myMod');
//taking in an empty object from the dbctrl
app.factory('studentFactory', function(){

    var studentInfo = {};

return {
sendStudent: sendStudent,
returnStudent: returnStudent
}
function sendStudent(selectedStudent){
    studentInfo = selectedStudent;
    console.log(selectedStudent);
}
    function returnStudent(){
        console.log('This function is running');
        return studentInfo;
    }
});
