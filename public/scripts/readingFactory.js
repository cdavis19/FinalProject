var app = angular.module('myMod');

//storing information from the form inside of an object
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
