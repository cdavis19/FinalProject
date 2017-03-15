var express = require('express');
var pg = require('pg');
var app = express();
var password = require('./password');
var connectionString = 'postgres://uucfqjmvphfcff:' + password + '@ec2-50-17-236-15.compute-1.amazonaws.com:5432/de5hv9qg2ieort?ssl=true';
var bodyParser = require('body-parser');
var client = new pg.Client(connectionString);

var config = {

    user: 'uucfqjmvphfcff',
    database: 'de5hv9qg2ieort',
    password: password,
    host: 'ec2-50-17-236-15.compute-1.amazonaws.com',
    port: 5432,
    max: 100,
    idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

app.use(bodyParser.json({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

app.get('/get-student', function(req, res) {
    var results = [];
    pg.connect(connectionString, function(err, client, done) {

        var query = client.query('select * from studentsinfo');

        query.on('row', function(row) {
            results.push(row);
        });
        query.on('end', function() {
            client.end();
            return res.json(results);
        });
    });
});

app.post('/add-student', function(req, res, next) {
    var results = [];
    var data = {
        student: req.body.studentname,
        numOfBooks: req.body.numberofbooks,
        pages: req.body.pagesread
    }
    pg.connect(connectionString, function(err, client, done) {
        client.query('INSERT INTO studentsinfo(student, numOfBooks, pages) values($1, $2, $3)', [data.student, data.numOfBooks, data.pages]);
        var query = client.query('SELECT * FROM studentsinfo');

        query.on('row', function(row) {
            results.push(row);
        });
        query.on('end', function() {
            client.end();
            return res.json(results);
        });
    });
});

 app.put('/update-books-read', function(req, res, next) {
     var results = [];
     var id = req.params.id;
     var data = {
       booksread: req.body.booksread,
     }
     pg.connect(connectionString, function(err, client, done) {
       client.query('UPDATE studentsinfo SET booksread=($1) WHERE id=($2)', [(data.booksread + 1), id]);
     var query = client.query('SELECT * FROM studentsinfo');

     query.on('row', function(row){
           results.push(row);
         console.log(row);
         });
         query.on('end', function(){
           client.end();
           return res.json(results);
             console.log(results);
         });
       });
     });



var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('PostgreSQL server running at http://localhost:%s', port);
});
