var app = angular.module('myMod');
app.factory('readingFactory', function() {
  var bookInfo = {};
  return {
    exportTo: function(data) {
      bookInfo = data;
      },
    importIn: function() {
      return bookInfo;
    }
  }
});
