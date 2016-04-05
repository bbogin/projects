var express = require('express');


// database stuff
var dbConfig = require('./db.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


mongoose.connect('mongodb://localhost/trackmedb')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We did it!")
});



var app = express();


app.get('/', function(req,res) {
	res.send("Hello World.")
})




var server = app.listen(3000, function() {
	console.log("listening on port 3000")
})