// Getting canvas element
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// Setting up canvas height
canvas.width = 480;
canvas.height = 320;
var ballArray = []

addBall()

function addBall(){
  // setting up ball
  for(let i =0; i<90; i++){
     var ball = {
      radius: pickRandom(10,30),
      x: pickRandom(30,canvas.width-30),
      y: pickRandom(30,canvas.height-30),
      dx: pickRandom(-2,2),
      dy: pickRandom(-2,2),
      color: getRandomColor()
    };
    ballArray.push(ball)
  }
}

// Call function every 10 ms

// Draw circle
function drawBall(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
}


function pickRandom(min,max){
  return Math.random()*(max-min)+min
}

setInterval(update, 10);

function update(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   for(let i = 0; i < ballArray.length;i++){
     ball = ballArray[i];
     moveBall(ball)
   }
}
// move ball
function moveBall(ball) {

  drawBall(ball);
  ball.x += ball.dx;
  ball.y += ball.dy;

  // bounce off edges
  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx *= -1;
  }
  if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
    ball.dy *= -1;
  }
}

function getRandomColor(){
  var red  = Math.floor(pickRandom(0,255))
  var green = Math.floor(pickRandom(0,255))
  var blue = Math.floor(pickRandom(0,255))
  return "rgba(" + red + "," + green + "," + blue + ",0.7)"
}
