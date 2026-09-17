let a = 1
let b = 1

function setup() {
  createCanvas(1855, 1000);
}

function draw() {
  background(200);
text(b, 100, 100)
text(a, 100, 115)
}

function keyPressed(){
  if (key === 'Space') {
    b = random(0, 100)
    a = random(0, 100)
  }
}