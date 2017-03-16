var app = angular.module('myMod');

//putting everything into an array
app.factory('dbFactory', function($http){
  var student = [];
  return {
    update: update,
    getStudent: getStudent,
    addStudent: addStudent,
    updateBooksRead: updateBooksRead
  };

  //spits out info from our database
  function update(){
    return student;
  };
      //retrieves data from our database
  function getStudent(){
    var promise = $http({
      method: 'GET',
      url: '/get-student'
    }).then(function success(response){
      console.log(response);
      student = response.data;
    });
    return promise;
  };

  //this function is for adding new students
  function addStudent(newStudent) {
  var newStudent = {
    studentname: student.studentname
  }
  var promise = $http({
    method: 'POST',
    url: '/add-student',
    data: newStudent
  }).then(function success(response){
    console.log(response);
    student = response.data;
  });
  return promise;
};

  //this function updates the number of books by id
function updateBooksRead(updatedStudent){
  console.log(updatedStudent);
  var promise = $http({
    method: 'PUT',
    url: '/update-books-read/'  + updatedStudent.id,
    data: updatedStudent
  }).then(function success(response){
    console.log(response);
    student = response.data;
  });
  return promise;
};


});
