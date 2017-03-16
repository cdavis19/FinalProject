//requires express & pg in order to run
var express = require('express');
var pg = require('pg');
//calling express
var app = express();
//stores our password
var password = require('./password');
//the login information that is required in order to use database
var connectionString = 'postgres://uucfqjmvphfcff:' + password + '@ec2-50-17-236-15.compute-1.amazonaws.com:5432/de5hv9qg2ieort?ssl=true';
//requires bodyParser to run
var bodyParser = require('body-parser');
//sets the client using the connection as an argument
var client = new pg.Client(connectionString);



//stores information required to determine what database we are pulling from in an object called config
var config = {

    user: 'uucfqjmvphfcff',
    database: 'de5hv9qg2ieort',
    password: password,
    host: 'ec2-50-17-236-15.compute-1.amazonaws.com',
    port: 5432,
    max: 100,
    idleTimeoutMillis: 30000
};
//pool is where requests to server are held
var pool = new pg.Pool(config);
//bodyParser sorts or parses through the body of the request
app.use(bodyParser.json({
    extended: true
}));
//tells express to run from the directory called public
app.use(express.static(__dirname + '/public'));
//this Get function gets the entire table from the database and uses "query" to store the results from the get request in an empty array results
app.get('/get-student', function(req, res) {
    var results = [];
    pg.connect(connectionString, function(err, client, done) {
        //selects everything from the students info table
        var query = client.query('select * from studentsinfo');
        //going thru each row of our database and pushes each row to results array
        query.on('row', function(row) {
            results.push(row);
        });
        //this stops the database from pushing each row to the results array
        query.on('end', function() {
            client.end();
            return res.json(results);
        });
    });
});

//this function adds new data to our table/database
app.post('/add-student', function(req, res, next) {
    var results = [];
    var data = {
        studentname: req.body.studentname
    };
    //connection is our address to the database, this allows the ability to access the information contained in the database
    pg.connect(connectionString, function(err, client, done) {
        //this query inserts a new row into the table based on data.studentname from the user input, and automatically sets booksread to zero
        client.query('INSERT INTO studentsinfo(studentname, booksread) values($1, $2)', [data.studentname, 0]);
        //this query pulls all of the data from the table
        var query = client.query('SELECT * FROM studentsinfo');
        //going thru each row of our database and pushes each row to results array
        query.on('row', function(row) {
            results.push(row);
        });
        //this stops the database from pushing each row to the results array
        query.on('end', function() {
            client.end();
            return res.json(results);
        });
    });
});

//this function updates existing data in the table/database i.e. updates number of books
app.put('/update-books-read/:id', function(req, res, next) {
    var results = [];
    var id = req.params.id;
    var data = {
        booksread: req.body.booksread
    };

    //updates the booksread field in table
    pg.connect(connectionString, function(err, client, done) {
        client.query('UPDATE studentsinfo SET booksread=($1) WHERE id=($2)', [data.booksread, id]);

        //this query pulls all of the data from the table
        var query = client.query('SELECT * FROM studentsinfo');

        query.on('row', function(row) {
            results.push(row);

        });

        //this stops the database from pushing each row to the results array
        query.on('end', function() {
            client.end();
            return res.json(results);

        });
    });
});


//this sets our server to localhost:3000
var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('PostgreSQL server running at http://localhost:%s', port);
});
