
let speed = 5



function setup() {
  createCanvas(800, 800);
}

let r = 0;
let g = 0;
let b = 0;

let n = 0;


function draw() {
  background(0);

if(r <= 255 && n == 0){
  r += speed
}
else if(r >= 200){
  g += speed
}
else if(r >= 255){
  n = 1
  r -= speed
}

for(let i = 0; i < 80; i++){
  for(let j = 0; j < 80; j++){
    fill(r, g, b)
    ellipse(i * 10 + 5, j * 10 + 5, 10, 10)
  }
}
}
