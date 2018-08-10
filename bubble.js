// the bubble object

function Bubble(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;

  this.opacity = getRandomInt(1, 3) / 10;
  this.speed = getRandomInt(2.5, 4);

  this.tilt = 1;
  this.tiltCounter = 1;
  this.test = getRandomInt(1, 4) / 100;

  // bubble with random positions and a random radius

  this.draw = function() {
    if (this.y < 0 - this.r) {
      this.y = canvas.height + this.r;
    } else {
      ctx.beginPath();
      ctx.fillStyle = "rgba(23, 68, 140," + this.opacity + ")";
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
  };

  this.move = function() {
    this.y += -this.speed;
    this.tiltCounter += this.test;
    this.x += this.tiltCounter;

    if (this.tiltCounter < -2 || this.tiltCounter > 2) {
      this.test = -this.test;
    }

    this.draw();
  };
}

// helper

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
