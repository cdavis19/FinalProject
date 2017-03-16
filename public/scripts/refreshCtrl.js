var app = angular.module('myMod');

app.controller('refreshCtrl', function($location){
  $location.path("/");
})
