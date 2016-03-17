var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app).listen(3000);
var io = require("socket.io")(server);

app.use(express.static("./public"));

socketlist = []
done = []

io.on("connection", function(socket) {
	socketlist.push(socket["client"]["conn"]["id"])
	socket.send({id:socket["client"]["conn"]["id"]})

    socket.on("name", function(message) {
      console.log("name")
    	socket.broadcast.emit("name", message);
    });

    socket.on("newword", function(message) {
      console.log("newword")
    	socket.broadcast.emit("newword", message);
    });

    socket.on('disconnect', function() {
    	idx = socketlist.indexOf(socket["client"]["conn"]["id"]);
    	if (idx > -1){
    		socketlist.splice(idx, 1)
    	}
    	idx = done.indexOf(socket["client"]["conn"]["id"]);
    	if (idx > -1){
    		done.splice(idx, 1)
    	}
      	socket.broadcast.emit("removename", socket["client"]["conn"]["id"]);
  	});

  	socket.on('enoughwords', function(name) {
  		done.push(socket["client"]["conn"]["id"])
  		console.log(socket["client"]["conn"]["id"]+" is done")
  		if (done.length == socketlist.length){
        console.log(socketlist)
        console.log(done)
  			console.log("starting game")
  			startid = done[Math.round(Math.random()*(done.length-1))]
  			io.emit("gamestart", startid);
        console.log("starting", startid)
  		}
  	});

    socket.on("nextturn", function(message) {
      console.log("nextturn")
      socket.broadcast.emit("nextturn", message)
    });

    

});

console.log("Starting Socket App - http://localhost:3000");