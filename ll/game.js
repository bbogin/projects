var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;
context.canvas.style.background = "black";

context.fillStyle = "white";






var gravity = 0.003;

function updateSpaceship()
{	
	if (spaceship.falling){
	    spaceship.position.x += spaceship.velocity.x;
	    spaceship.position.y += spaceship.velocity.y;
	    if(spaceship.rotatingRight)
	    {
	        spaceship.angle += Math.PI / 180;
	    }
	    else if(spaceship.rotatingLeft)
	    {
	        spaceship.angle -= Math.PI / 180;
	    }

	    if(spaceship.engineOn)
	    {
	        spaceship.velocity.x += spaceship.thrust * Math.sin(-spaceship.angle);
	        spaceship.velocity.y += spaceship.thrust * Math.cos(spaceship.angle);
	        spaceship.fuel -= .05
	    }
	    
    	spaceship.velocity.y += gravity;
	
	}
}







var spaceship =
{
    // color: "black",
    width: 8,
    height: 22,
    position:
    {
        x: 0,
        y: 30
    },
    angle: 0,
  velocity: {
    x: 1.3,
    y: 0
  },
  	thrust:-.01,
  	points: 0,
  	falling: true,
  	landed:false,
    engineOn: false,
    rotatingLeft: false,
    rotatingRight: false,
}


function drawSpaceship()
{
    context.save();
    context.beginPath();
    context.translate(spaceship.position.x, spaceship.position.y);
    context.rotate(spaceship.angle);
    context.rect(spaceship.width * -0.5, spaceship.height * -0.5, spaceship.width, spaceship.height);
    context.fillStyle = spaceship.color;
    context.fill();
    context.closePath();

    // Draw the flame if engine is on
    if(spaceship.engineOn)
    {
        context.beginPath();
        context.moveTo(spaceship.width * -0.5, spaceship.height * 0.5);
        context.lineTo(spaceship.width * 0.5, spaceship.height * 0.5);
        context.lineTo(0, spaceship.height * 0.5 + Math.random() * 15);
        context.lineTo(spaceship.width * -0.5, spaceship.height * 0.5);
        context.closePath();
        context.fillStyle = "orange";
        context.fill();
    }
    context.restore();
}











var stars = [];


for (var i = 0; i < 500; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.sqrt(Math.random() * 2),
    alpha: 1.0,
    decreasing: true,
    dRatio: Math.random()*0.05
  });
}



function drawStars() {
  context.save();
  // context.fillStyle = "black"
  for (var i = 0; i < stars.length; i++) {
    var star = stars[i];
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 2*Math.PI);
    context.closePath();
    // context.fillStyle = "black";
    context.fill();
  }
  context.restore();
}







function updateInfo() {
	context.font = "16px Courier New";
	context.strokeText = "white"
	context.fillText("Horizontal Speed: "+Math.round(spaceship.velocity.x).toString(),10,50);
	context.fillText("Vertical Speed: "+Math.round(spaceship.velocity.y).toString(),10,70);
	// context.fillText("Fuel: "+Math.round(spaceship.fuel).toString(),10,90);
	context.fillText("Points: "+spaceship.points.toString(),10,90);
}








h = window.innerHeight


landingpads = [
	{x1:260,x2:280,y:55},
	{x1:625,x2:645,y:110},
	{x1:850,x2:870,y:200},
	{x1:1065,x2:1085,y:80}
]

mountainpath = [
	[0,0],
	[50,20],
	[70,40],
	[80,125],
	[95,175],
	[120,110],
	[150,100],
	[200,80],
	[250,60],
	[260,55],
	[280,55],
	[300,50],
	[400,200],
	[450,400],
	[500,300],
	[550,200],
	[600,180],
	[625,110],
	[645,110],
	[650,100],
	[700,150],
	[750,250],
	[800,310],
	[850,200],
	[870,200],
	[900,220],
	[950,300],
	[1000,100],
	[1050,120],
	[1065,80],
	[1085,80],
	[1100,40],
	[1150,80],
	[1200,20],
	[1280,0]
]

function drawMountains() {
	context.beginPath();
	context.moveTo(mountainpath[0][0], h-mountainpath[0][1]);
	for (var i = 1; i < mountainpath.length; i++){
		context.lineTo(mountainpath[i][0], h-mountainpath[i][1]);
	}
	context.strokeStyle = "white"
	context.stroke()
	context.fillStyle = "black"
	context.fill()
	context.fillStyle = "white"


	for (var i = 0;i<landingpads.length; i++){
		context.beginPath();
		context.moveTo(landingpads[i].x1, h-landingpads[i].y);
		context.lineTo(landingpads[i].x2, h-landingpads[i].y);
		context.strokeStyle = "green";
		context.stroke();
		context.closePath();

		context.beginPath();
		context.moveTo(landingpads[i].x1, h-landingpads[i].y-1);
		context.lineTo(landingpads[i].x2, h-landingpads[i].y)-1;
		context.stroke();
		context.strokeStyle = "white";
		context.closePath();
	}
}



function checkLanding() {
	for (var i = 0; i<mountainpath.length-1; i++){
		var x0 = mountainpath[i][0]
		var y0 = h-mountainpath[i][1]
		var x1 = mountainpath[i+1][0]
		var y1 = h-mountainpath[i+1][1]
		if ((spaceship.position.x>=x0)&(spaceship.position.x<=x1)){
			intersection = y0 + (y1-y0)*((spaceship.position.x-x0)/(x1-x0))
			if ((spaceship.position.y+spaceship.height/2)>=intersection){
				spaceship.falling = false;
			}
		}
	}
	
}
	











function
				for (var i = 0; i<landingpads.length; i++){
					if ((spaceship.position.x > landingpads[i].x1) && (spaceship.position.x < landingpads[i].x2)){
						spaceship.landed = true;
						console.log("true")
					} else {
						spaceship.landed = false;
						console.log("false")
					}
				}




function draw()
{
    // Clear entire screen
    context.clearRect(0, 0, canvas.width, canvas.height);

    updateSpaceship();

    // Begin drawing
    drawSpaceship();
    drawStars();
    updateInfo();
    drawMountains();
    /* other draw methods (to add later) */

    checkLanding();

    if (spaceship.falling){
    	animationid = requestAnimationFrame(draw);
    } else {
    	cancelAnimationFrame(animationid);
    	checkLanding();
    	if (spaceship.landed){
    		alert("landed")
    	}
    	else {
    		alert("crashed")
    	}
    	location.reload();

	}
}
























function keyLetGo(event)
{
    switch(event.keyCode)
    {
        case 37:
            // Left Arrow key
            spaceship.rotatingLeft = false;
            break;
        case 39:
            // Right Arrow key
            spaceship.rotatingRight = false;
            break;
        case 38:
            // Up Arrow key
            spaceship.engineOn = false;
            break;
    }
}

document.addEventListener('keyup', keyLetGo);

function keyPressed(event)
{
    switch(event.keyCode)
    {
        case 37:
            // Left Arrow key
            spaceship.rotatingLeft = true;
            event.preventDefault();
            break;
        case 39:
            // Right Arrow key
            spaceship.rotatingRight = true;
            event.preventDefault();
            break;
        case 38:
            // Up Arrow key
            spaceship.engineOn = true;
            event.preventDefault();
            break;
        case 40:
        	// Down Arrow key
        	even.preventDefault();
        	break;
    }
}

document.addEventListener('keydown', keyPressed);

draw();