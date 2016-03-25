var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;
context.canvas.style.background = "black";

context.fillStyle = "white";






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

var x = 0;
function updateInfo() {
	context.font = "16px Courier New";
	context.strokeText = "white"
	context.fillText("Horizontal Speed: "+Math.round(spaceship.velocity.x).toString(),10,50);
	context.fillText("Vertical Speed: "+Math.round(spaceship.velocity.y).toString(),10,70);
	context.fillText("Fuel: "+Math.round(spaceship.fuel).toString(),10,90);
	context.fillText("Points: "+spaceship.points.toString(),10,110);
}
	






















var spaceship =
{
    // color: "black",
    width: 8,
    height: 22,
    position:
    {
        x: 100,
        y: 200
    },
    angle: 0,
  velocity: {
    x: 1,
    y: 0
  },
  	thrust:-.05,
  	fuel:500,
  	points: 0,
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
        context.lineTo(0, spaceship.height * 0.5 + Math.random() * 10);
        context.lineTo(spaceship.width * -0.5, spaceship.height * 0.5);
        context.closePath();
        context.fillStyle = "orange";
        context.fill();
    }
    context.restore();
}

var gravity = 0.02;

function updateSpaceship()
{	

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


function draw()
{
    // Clear entire screen
    context.clearRect(0, 0, canvas.width, canvas.height);

    updateSpaceship();

    // Begin drawing
    drawSpaceship();
    drawStars();
    updateInfo()
    /* other draw methods (to add later) */

    requestAnimationFrame(draw);
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