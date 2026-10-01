let c = 0

function setup() {
  createCanvas(800, 400);

}

function draw() {
  background(220);
  strokeWeight(0)
  stroke(0)
  fill(0)
text ("1", 20, 15)
text ("2", 20, 105)
text ("3", 80, 105)
text ("4", 80, 205)
text ("5", 540, 20)
text ("6", 350, 105)
text ("7", 625, 105)


fill(255)
strokeWeight(1)

// 1.

for(let i = 0; i < 10; i++){

  if(i == 6){
  fill(0,0,255)
}
else{
  fill(255)
}

rect(25 + (i*50), 25, 50, 50)


} 



// 2.

for(let i = 0; i <= 4; i++){
if(c <= 255){
  c = (i*63.75)
  fill(c)
  rect(25 ,110 + (i*50), 50, 50)
}  }  

// 3
}