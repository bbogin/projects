var fs = require("fs");
var express = require('express')
var app = express();

app.use(express.static('public'));

app.get('/api', function(req, res) {
	res.send("Welcome to the API")
})

app.get('/v1/:name?', function(req, res) {
	var name = req.params.name

	fs.readFile( __dirname + "/" + "resume.json", 'utf8', function (err, data) {
		j = JSON.parse(data);
		for (var key in j) {
			if (j.hasOwnProperty(key)) {
		  		if (j[key].name == name) {
		    		res.send( "<pre>"+data+"</pre>" );
		  		} else {
		  			res.send( name+" was not found the resume" );
		  		}
			}
		}
       
   	});
})

app.get('/v1/:name?/contact', function(req, res) {
	var name = req.params.name

	fs.readFile( __dirname + "/" + "resume.json", 'utf8', function (err, data) {
		j = JSON.parse(data);
		for (var key in j) {
			if (j.hasOwnProperty(key)) {
		  		if (j[key].name == name) {
		    		res.send( "<pre>"+JSON.stringify(j[key]["contact"], null, 4)+"</pre>" );
		  		} else {
		  			res.send( name+" was not found the resume" );
		  		}
			}
		}
       
   	});
})

app.get('/v1/:name?/experience', function(req, res) {
	var name = req.params.name

	fs.readFile( __dirname + "/" + "resume.json", 'utf8', function (err, data) {
		j = JSON.parse(data);
		for (var key in j) {
			if (j.hasOwnProperty(key)) {
		  		if (j[key].name == name) {
		    		res.send( "<pre>"+JSON.stringify(j[key]["experience"], null, 4)+"</pre>" );
		  		} else {
		  			res.send( name+" was not found the resume" );
		  		}
			}
		}
       
   	});
})

app.get('/v1/:name?/education', function(req, res) {
	var name = req.params.name

	fs.readFile( __dirname + "/" + "resume.json", 'utf8', function (err, data) {
		j = JSON.parse(data);
		for (var key in j) {
			if (j.hasOwnProperty(key)) {
		  		if (j[key].name == name) {
		    		res.send( "<pre>"+JSON.stringify(j[key]["education"], null, 4)+"</pre>" );
		  		} else {
		  			res.send( name+" was not found the resume" );
		  		}
			}
		}
       
   	});
})

var server = app.listen(3000, function(){
	console.log("listening on port 3000")
})