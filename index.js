let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// draw the Aquarium

function drawWater() {
  ctx.beginPath();
  ctx.fillStyle = "skyblue";

  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.closePath();
}

// draw many bubbles

let bubbles = []; // global bubbles array

let minRad = 5;
let maxRad = 60;

let minX = 10;
let maxX = canvas.width - 80;

let minY = 10;
let maxY = canvas.height - 80;

for (let i = 0; i < 15; i++) {
  // create a new bubble with random locations and radius

  var x = Math.floor(Math.random() * (maxX - minX + 1) + minX);
  var y = Math.floor(Math.random() * (maxY - minY + 1) + minY);
  var r = Math.floor(Math.random() * (maxRad - minRad + 1) + minRad);

  var bubble = new Bubble(x, y, r);

  bubbles.push(bubble);
}

function initialize() {
  drawWater();
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].draw();
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawWater();
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
  }
  requestAnimationFrame(draw);
}

initialize();
draw();
