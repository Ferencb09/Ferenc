
let speed = 50 // Set the speed of the circle.




let x = 1;
let y = 1;
let a = 1
let b = 60

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  y = y + speed
  x = y * 1234
  a = y
  text(b, 380, 20)
  text(y, 20, 20)
  text(x, 60, 20)
  circle(a, b, 20)
  if (a > 420) {
    y = 1;
    b += 20;
  }
  if (b > 420) {
    b = 60
  }
}
