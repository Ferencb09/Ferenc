let vragenlijst = [];
let ongoinggame = 0;    // 1 = logo's, 2 = gameplay, 3 = flags, 4 = historic borders, 0 = no game is active

function setup() {
  createCanvas(1500, 950);
  let vraag = { 
      vraag: "Which logo is this?",
      antwoorden: ["A. Apple", "B. Samsung", "C. Xiaomi", "D. Huawei"],
      antwoord: (3)
   }

   vragenlijst.push( vraag );

   vraag = { 
      vraag: "Which logo is this?",
      antwoorden: ["A. C1000", "B. Plus", "C. Spar", "D. Dekamarkt"],
      antwoord: (2)
   }

   vragenlijst.push( vraag );

  
  
}

let welkeVraag = 0


let answerA = 180
let answerB = 180
let answerC = 180
let answerD = 180
let StrokeA = 0
let StrokeB = 0
let StrokeC = 0
let StrokeD = 0
let Images = [];
let selectedA =  0
let selectedB =  0
let selectedC =  0
let selectedD =  0
let ImagesSel = [];

function preload() {
  Images.push(loadImage("Afbeeldingen/logojpeg.jpg"))
  Images.push(loadImage("Afbeeldingen/gameplay1.jpg"))
  Images.push(loadImage("Afbeeldingen/flag.jpg"))
  Images.push(loadImage("Afbeeldingen/border.jpg"))
  ImagesSel.push(loadImage("Afbeeldingen/logosel.jpg"))
  ImagesSel.push(loadImage("Afbeeldingen/gameplaysel.jpg"))
  ImagesSel.push(loadImage("Afbeeldingen/flagsel.jpg"))
  ImagesSel.push(loadImage("Afbeeldingen/bordersel.jpg"))
  Images.push(loadImage("Afbeeldingen/logo/Xiaomi.png"))
}

function draw() {
  strokeWeight(0)
  background("#a349a4");
  strokeWeight(10)
  fill("#dc64de")
  rect(-20,-20,1600,200)
  fill(0)
  textSize(120)
  text("Quizzzzzzzz",50,125)
  textSize(20)
  text("Made By: Ferenc Bolkenbaas", 1220, 20)

  // Difficulty
  textStyle(BOLD)
  textSize(40)

  strokeWeight(5)
  fill(0,0,100)
  square(750, 195, 742, 10)
  
  // Easy - Logo

  fill('lime')
  if (mouseX >= 50 && mouseX <= 700 && mouseY >= 185 && mouseY <= 345) {
    StrokeA = 255
  }
  else {
    StrokeA = 0
  }
  stroke(StrokeA)
  rect(50,190,650,160)
  image(Images[0],50,190)
  fill(255)
  noStroke()
  text("Easy - Logo's", 65, 235)
 

  // Medium - Gameplay

  fill('orange')
  if (mouseX >= 50 && mouseX <= 700 && mouseY >= 380 && mouseY <= 545) {
    StrokeB = 255
  }
  else {
    StrokeB = 0
  }
  stroke(StrokeB)
  rect(50,385,650,160)
  image(Images[1],50,385)
  fill(255)
  noStroke()
  textSize(30)
  text("Medium - Gameplay", 65, 435)

  // Easy & Hard - Flags

  fill('red')
  if (mouseX >= 50 && mouseX <= 700 && mouseY >= 585 && mouseY <= 740) {
    StrokeC = 255
  }
  else {
    StrokeC = 0
  }
  stroke(StrokeC)
  rect(50,580,650,160)
  image(Images[2],50,580)
  fill(255)
  noStroke()
  textSize(30)
  text("Easy to hard - Flags", 65, 635)

  // Insane - Historic Borders

  fill('purple')
  if (mouseX >= 50 && mouseX <= 700 && mouseY >= 785 && mouseY <= 940) {
    StrokeD = 255
  }
  else {
    StrokeD = 0
  }
  stroke(StrokeD)
  rect(50,780,650,160)
  image(Images[3],50,780)
  fill(0)
  noStroke()
  textSize(30)
  text("Insane - Historic Borders ", 65, 835)

  // Selected Screens

if(selectedA == 1){
  fill(85)
  square(760, 205, 722, 10)
  image(ImagesSel[0], 800, 205)
  image(ImagesSel[0], 800, 555)
  fill(230)
  textSize(80)
  text("Selected: Logo's", 800, 290)
  textSize(40)
  fill(0,255,0)
  text("Easy", 1060, 350)
  playButton()
}
if(selectedB == 1){
  fill(0,0,0)
  square(760, 205, 722, 10)
  image(ImagesSel[1], 766,210)
  fill(230)
  textSize(75)
  text("Selected: Gamplay", 790, 290)
  textSize(40)
  fill(255,165,0)
  text("Medium", 1030, 350)
  playButton()
}
if(selectedC == 1){
  fill(0,0,120)
  square(760, 205, 722, 10)
  image(ImagesSel[2], 766,210)
  fill(230)
  textSize(80)
  text("Selected: Flags", 825, 290)
  textSize(40)
  fill(255,0,0)
  text("Hard", 1060, 350)
  playButton()
}
if(selectedD == 1){
  fill(70,70,0)
  square(760, 205, 722, 10)
  image(ImagesSel[3], 766,210)
  fill(230)
  textSize(50)
  text("Selected: Historic Borders", 805, 290)
  textSize(40)
  fill(200,0,255)
  text("Insane", 1050, 350)
  playButton()
}


if(ongoinggame == 1) {
  fill(0,140,150)
  rect(0, 0, 1500, 950)
}

 textSize(20)
 fill(0)
// text(selectedA, 800, 50)
// text(selectedB, 800, 80)
// text(selectedC, 800, 110)
// text(selectedD, 800, 140)

if( ongoinggame == 1 ){
homeButton()
fill(255)

fill(answerA)
  if (mouseX >= 630 && mouseX <= 870 && mouseY >= 350 && mouseY <= 450) {
    fill(answerA+20)
  }
  else{fill(answerA)}
rect(630, 350, 240, 100, 10)
  if (mouseX >= 630 && mouseX <= 870 && mouseY >= 470 && mouseY <= 570) {
    fill(answerB+20)
  }
  else{fill(answerB)}
rect(630, 470, 240, 100, 10)
  if (mouseX >= 930 && mouseX <= 1170 && mouseY >= 350 && mouseY <= 450) {
    fill(answerC+20)
  }
  else{fill(answerC)}
rect(930, 350, 240, 100, 10)
  if (mouseX >= 930 && mouseX <= 1170 && mouseY >= 470 && mouseY <= 570) {
    fill(answerD+20)
  }
  else{fill(answerD)}
rect(930, 470, 240, 100, 10)

fill(100)
rect(660,280,460,50,50)
fill(200)
rect(670,270,460,50,50)

fill(0)
text(vragenlijst[welkeVraag].vraag, 800, 300)
text(vragenlijst[welkeVraag].antwoord, 700, 300)
text(vragenlijst[welkeVraag].antwoorden[0], 650, 410)
text(vragenlijst[welkeVraag].antwoorden[1], 950, 410)
text(vragenlijst[welkeVraag].antwoorden[2], 650, 525)
text(vragenlijst[welkeVraag].antwoorden[3], 950, 525)

}
}
// Mouse Clicked for menu

function mouseClicked() {
  if(mouseX >= 50 && mouseX <= 700 && mouseY >= 185 && mouseY <= 345 && ongoinggame == 0) {
  selectedA = 1
  selectedB = 0
  selectedC = 0
  selectedD = 0
  }

  if(mouseX >= 50 && mouseX <= 700 && mouseY >= 380 && mouseY <= 545 && ongoinggame == 0) {
  selectedA = 0
  selectedB = 1
  selectedC = 0
  selectedD = 0
  }

  if(mouseX >= 50 && mouseX <= 700 && mouseY >= 585 && mouseY <= 740 && ongoinggame == 0) {
  selectedA = 0
  selectedB = 0
  selectedC = 1
  selectedD = 0
  }

  if(mouseX >= 50 && mouseX <= 700 && mouseY >= 785 && mouseY <= 940 && ongoinggame == 0) {
  selectedA = 0
  selectedB = 0
  selectedC = 0
  selectedD = 1
  }

// Play Button

  if (mouseX >= 900 && mouseX <= 1320 && mouseY >= 750 && mouseY <= 850 && ongoinggame == 0){
    ongoinggame = 1
    welkeVraag = 0
  }

  
 
  
// Mouse inputs Answers

 if (mouseX >= 630 && mouseX <= 870 && mouseY >= 350 && mouseY <= 450) {
  vragenlijst[vraag].antwoord = 0
  }
  

  if (mouseX >= 630 && mouseX <= 870 && mouseY >= 470 && mouseY <= 570) {
  vragenlijst[vraag].antwoord = 1
  }


  if (mouseX >= 930 && mouseX <= 1170 && mouseY >= 350 && mouseY <= 450) {
  vragenlijst[vraag].antwoord = 2
  }


  if (mouseX >= 930 && mouseX <= 1170 && mouseY >= 470 && mouseY <= 570) {
  vragenlijst[vraag].antwoord = 3
  }

  if (mouseX >= 20 && mouseX <= 310 && mouseY >= 10 && mouseY <= 110){
    ongoinggame = 0}

}
  function playButton() {
    
  if (mouseX >= 900 && mouseX <= 1320 && mouseY >= 750 && mouseY <= 850){
    fill(0,255,0)
  }
  else{fill(0,200,0)}
  stroke(0)
  strokeWeight(5)
  rect(900, 750, 420, 100)
  fill(0)
  noStroke()
  text("Play", 1060, 810)
}


function homeButton(){
   if (mouseX >= 20 && mouseX <= 310 && mouseY >= 10 && mouseY <= 110){
    fill(190,0,0)}
    else{fill(250,0,0)}
  stroke(0)
  strokeWeight(5)
  rect(10,10,300,100,10)
  noStroke()
  textSize(30)
  fill(0)
  textFont("Palatino")
  text("Back To Home.", 105,85)

  // Little House
  
  stroke(0)
  strokeWeight(4)
  
  line(30,90,50,90)
  line(70,90,90,90)
  line(52,70,68,70)
  line(52,70,52,90)
  line(68,70,68,90)
  line(30,60,30,90)
  line(90,60,90,90)

  line(20,60,60,25)
  line(100,60,60,25)

  line(35,39,35,25)
  line(35,25,42,25)
  line(44,30,44,25)

  noStroke()
}