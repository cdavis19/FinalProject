var app = angular.module('myMod');

app.factory('myFactory', function($http){
  var student = [];
  return {
    update: update,
    getStudent: getStudent,
    addStudent: addStudent
    editStudent: editStudent
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

function editStudent(){

  var promise = $http({
    method: 'PUT',
    url: '/edit-student',
  }).then(function success(response){
    console.log(response);
    student = response.data;
  });
  return promise;
};


});
