var express = require('express');
var pg = require('pg');
var app = express();
var password = require('./password');
var connectionString = 'postgres://uucfqjmvphfcff:'+password+'@ec2-50-17-236-15.compute-1.amazonaws.com:5432/de5hv9qg2ieort?ssl=true';
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

app.use(bodyParser.json({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/get-student', function(req, res){
  var results = [];
  pg.connect(connectionString, function(err, client, done){

    var query = client.query('select * from studentsinfo');

    query.on('row', function(row){
      results.push(row);
    });
    query.on('end', function(){
      client.end();
      return res.json(results);
    });
  });
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('PostgreSQL server running at http://localhost:%s', port);
});
