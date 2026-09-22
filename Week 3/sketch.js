let spelerAanDeBeurt
let welkeKleurPerBlokje
let grooteVierkanten = 180
let target = 180;





// Hier niet aan zitten!

let backgroundcirclesize = 1500
let turn = 1

let block1 = 0
let block2 = 0
let block3 = 0
let block4 = 0
let block5 = 0
let block6 = 0
let block7 = 0
let block8 = 0
let block9 = 0

let b1c = 255
let b2c = 255
let b3c = 255
let b4c = 255
let b5c = 255
let b6c = 255
let b7c = 255
let b8c = 255
let b9c = 255


function setup() {
  createCanvas(1850, 1000);
}

function draw() {
  background(0);
  strokeWeight(0)
  fill(255, 0 ,0)
  circle(900,500,1500)
  fill(0,0,255)
  circle(900,500,backgroundcirclesize)
  fill(0)
  circle(900,500,1450)
  fill(190)
  square(600, 200, 620, 10)
  fill(255)
  textSize(120)

  textFont("georgia")
  text("Tic-Tac-Toe", 590,170)
  strokeWeight(5)



  fill(b1c)
  square(620, 220, grooteVierkanten, 10)
  fill(b2c)
  square(820, 220, grooteVierkanten, 10)
  fill(b3c)
  square(1020, 220, grooteVierkanten, 10)

  fill(b4c)
  square(620, 420, grooteVierkanten, 10)
  fill(b5c)
  square(820, 420, grooteVierkanten, 10)
  fill(b6c)
  square(1020, 420, grooteVierkanten, 10)

  fill(b7c)
  square(620, 620, grooteVierkanten, 10)
  fill(b8c)
  square(820, 620, grooteVierkanten, 10)
  fill(b9c)
  square(1020 , 620, grooteVierkanten, 10)


  //Eerste Rij

  if (mouseX > 620 && mouseX < 800 && mouseY > 220 && mouseY < 400) {
    b1c = 200
  }
  else{b1c = 255}

  if (mouseX > 820 && mouseX < 1000 && mouseY > 220 && mouseY < 400) {
    b2c = 200
  }
  else{b2c = 255}

    if (mouseX > 1020 && mouseX < 1220 && mouseY > 220 && mouseY < 400) {
    b3c = 200
  }
  else{b3c = 255}
  

  // Tweede Rij
  
  if (mouseX > 620 && mouseX < 800 && mouseY > 420 && mouseY < 600) {
    b4c = 200
  }
  else{b4c = 255}

  if (mouseX > 820 && mouseX < 1000 && mouseY > 420 && mouseY < 600) {
    b5c = 200
  }
  else{b5c = 255}

    if (mouseX > 1020 && mouseX < 1220 && mouseY > 420 && mouseY < 600) {
    b6c = 200
  }
  else{b6c = 255}

  
  // Derde Rij
  
  if (mouseX > 620 && mouseX < 800 && mouseY > 620 && mouseY < 800) {
    b7c = 200
  }
  else{b7c = 255}

  if (mouseX > 820 && mouseX < 1000 && mouseY > 620 && mouseY < 800) {
    b8c = 200
  }
  else{b8c = 255}

    if (mouseX > 1020 && mouseX < 1220 && mouseY > 620 && mouseY < 800) {
    b9c = 200
  }
  else{b9c = 255}


textSize(15)
fill(255)  
 text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 50, 50);


if (turn == 1) {
  backgroundcirclesize = 1500
} else {
  backgroundcirclesize = 1000
}

strokeWeight(15)

if(block1 == 2){
  stroke('red')
  line(640, 240, 780, 380)
  line(780, 240, 640, 380)
}
else if(block1 == 1) {
  fill(0,0)
  stroke('blue')
  circle(710,310,130)
}

if(block2 == 2){
  stroke('red')
  line(840, 240, 980, 380)
  line(980, 240, 840, 380)
}
else if(block2 == 1) {
  fill(0,0)
  stroke('blue')
  circle(910,310,130)
}

if(block3 == 2){
  stroke('red')
  line(1040, 240, 1180, 380)
  line(1180, 240, 1040, 380)
}
else if(block3 == 1) {
  fill(0,0)
  stroke('blue')
  circle(1110,310,130)
}

if(block4 == 2){
  stroke('red')
  line(640, 440, 780, 580)
  line(780, 440, 640, 580)
}
else if(block4 == 1) {
  fill(0,0)
  stroke('blue')
  circle(710,510,130)
}

if(block5 == 2){
  stroke('red')
  line(840, 440, 980, 580)
  line(980, 440, 840, 580)
}
else if(block5 == 1) {
  fill(0,0)
  stroke('blue')
  circle(910,510,130)
}

if(block6 == 2){
  stroke('red')
  line(1040, 440, 1180, 580)
  line(1180, 440, 1040, 580)
}
else if(block6 == 1) {
  fill(0,0)
  stroke('blue')
  circle(1110,510,130)
}

if(block7 == 2){
  stroke('red')
  line(640, 640, 780, 780)
  line(780, 640, 640, 780)
}
else if(block7 == 1) {
  fill(0,0)
  stroke('blue')
  circle(710,710,130)
}

if(block8 == 2){
  stroke('red')
  line(840, 640, 980, 780)
  line(980, 640, 840, 780)
}
else if(block8 == 1) {
  fill(0,0)
  stroke('blue')
  circle(910,710,130)
}

if(block9 == 2){
  stroke('red')
  line(1040, 640, 1180, 780)
  line(1180, 640, 1040, 780)
}
else if(block9 == 1) {
  fill(0,0)
  stroke('blue')
  circle(1110,710,130)
}




strokeWeight(3)
if(turn == 1){
  stroke('blue')
} 
else if(turn == 2){
  stroke('red')
}



}


function mouseClicked(){
if (b1c == 200 && block1 == 0) {
  if(turn == 1){
    block1 = 1
    turn = 2
  }
  else{
    block1 = 2
    turn = 1
  }
}

  if (b2c == 200 && block2 == 0) {
  if(turn == 1){
    block2 = 1
    turn = 2
  }
  else{
    block2 = 2
    turn = 1
  }
}

  if (b3c == 200 && block3 == 0) {
  if(turn == 1){
    block3 = 1
    turn = 2
  }
  else{
    block3 = 2
    turn = 1
  }
}


// Tweede Rij

if (b4c == 200 && block4 == 0) {
  if(turn == 1){
    block4 = 1
    turn = 2
  }
  else{
    block4 = 2
    turn = 1
  }
}

  if (b5c == 200 && block5 == 0) {
  if(turn == 1){
    block5 = 1
    turn = 2
  }
  else{
    block5 = 2
    turn = 1
  }
}

  if (b6c == 200 && block6 == 0) {
  if(turn == 1){
    block6 = 1
    turn = 2
  }
  else{
    block6 = 2
    turn = 1
  }
}

// Derde Rij

if (b7c == 200 && block7 == 0) {
  if(turn == 1){
    block7 = 1
    turn = 2
  }
  else{
    block7 = 2
    turn = 1
  }
}

  if (b8c == 200 && block8 == 0) {
  if(turn == 1){
    block8 = 1
    turn = 2
  }
  else{
    block8 = 2
    turn = 1
  }
}

  if (b9c == 200 && block9 == 0) {
  if(turn == 1){
    block9 = 1
    turn = 2
  }
  else{
    block9 = 2
    turn = 1
  }
}
}