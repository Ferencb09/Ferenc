let a;
let b;


function setup() {
  createCanvas(1855, 1000);
}

function draw() {
  background(200);
text(b, 100, 100)
text(a, 100, 115)

if (b >= a) {
  text("B is groter dan A", 100, 130)
} else if(a >= b){
 text("A is groter dan B", 100, 130)
} else{
  text("Bijde A en B zijn even groot", 100, 130)
}
}

function keyPressed(){
  if (key) {
    b = round(random(0, 100))
    a = round(random(0, 100))
  }
  
}