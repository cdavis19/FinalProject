var app = angular.module('myMod');

app.factory('dbFactory', function($http){
  var student = [];
  return {
    update: update,
    getStudent: getStudent,
    addStudent: addStudent,
    updateBooksRead: updateBooksRead
  };

  function update(){
    return student;
  };

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

  function addStudent(newStudent) {

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
