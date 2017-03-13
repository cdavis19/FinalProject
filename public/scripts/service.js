var app = angular.module('myMod');

app.factory('myFactory', function($http){
  var student = [];
  return {
    update: update,
    getStudent: getStudent
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

});
