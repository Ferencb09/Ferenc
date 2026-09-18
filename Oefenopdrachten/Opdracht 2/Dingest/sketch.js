let x = 1
let y = 1
let licht = 0 // 0 rood, 1 oranje, 2 groen
let tick = 0
let sunPositionX = -200
let backgroundColor = 255 
let daytimeSpeed = 0.5

let stoplicht = 565
let manualModeActive = 0

// Wolk
let wolk1x = 2000
let wolk1y = 200
let cloudSpeed = 2


//auto
let auto1x = -300
let auto1y = 800
let speedOfCar = 10
let carColor1 = 255
function setup() {
  createCanvas(1855, 1000);
}

function draw() {
  fill(0)
  text(tick, 50, 100)
  background('skyblue');
  x += 1;
  strokeWeight(0);
  tick += 1

// Wolken


  
  // Bergen & Grasveld
  
  fill("green");
  rect(0, 700, 1855);
  fill(120,120,120);
  triangle(50,700,450,420,910,700); //berg 2
  fill(90,90,90)
  triangle(50,700,450,420,250,700) //berg 2s
  fill(255);
  triangle(350,490,450,420,585,500); // Berg2sneeuwA
  fill(230)
  triangle(350,490,450,420,400,492) // Berg2sneeuwB
  fill(100,100,100)
  triangle(-40,700,180,500,360,700); //berg 1s
  fill(150,150,150);
  triangle(100,700,180,500,510,700); //berg 1
  fill(255);
  triangle(150,530,180,500,205,515); // Berg1sneeuwA
  triangle(350,490,450,420,585,500); // Berg2sneeuwA
  fill(230)
  triangle(135,540,180,500,172,524) // Berg1sneeuwB
  triangle(350,490,450,420,400,492) // Berg2sneeuwB
  fill(180)
  triangle(600,700,770,550,1100,700); //berg 3
  fill(140);
  triangle(600,700,770,550,700,700); //berg 3s

// Stad
fill(80)
rect(1400,500,50,200)
rect(1420,560,50,140)
rect(1380,600,50,100)
rect(1350,630,50,70)
rect(1300,610,50,90)
rect(1275,620,50,80)
rect(1238,670,50,30)
rect(1200,665,50,35)



// Wegen
  fill(30);
  quad(0,950,0,780,1855,780,1855,950);
  fill(255);
  rect(0,860,50,10);
  rect(100,860,50,10);
  rect(200,860,50,10);
  rect(300,860,50,10);
  rect(400,860,50,10);
  rect(500,860,50,10);
  rect(600,860,50,10);
  rect(700,860,50,10);
  rect(800,860,50,10);
  rect(900,860,50,10);
  rect(1000,860,50,10);
  rect(1100,860,50,10);
  rect(1200,860,50,10);
  rect(1300,860,50,10);
  rect(1400,860,50,10);
  rect(1500,860,50,10);
  rect(1600,860,50,10);
  rect(1700,860,50,10);
  rect(1800,860,50,10);


  // bomen
  fill(102, 49, 13)
rect(500,690,30,80);
rect(700,690,30,80);
rect(300,680,30,80);
rect(100,690,30,80);
rect(900,690,30,80);
fill('darkgreen')
ellipse(514, 650,100,130)
ellipse(714, 650,100,140)
ellipse(314, 670,100,110)
ellipse(114, 650,100,160)
ellipse(914, 650,100,160)


// StopLicht
if(manualModeActive == 0){if (tick == 500) {
  licht = 1
}
else if(tick == 600){
  licht = 2
}
else if(tick == 1500){
  licht = 0
}
else if(tick == 2500){
  tick = 0
  licht = 0
}
}


fill(170)
rect(1500, 710, 40, 65)
rect(1480, 530, 80, 200)





fill(0,40,0)
circle(1520,685,50)

fill(90,40,0)
circle(1520,625,50)

fill(60,0,0)
circle(1520,565,50)

if (licht == 2) {
  stoplicht = 565
  fill(255,0,0)
}
else if(licht == 1) {
  stoplicht = 625
  fill('yellow')
}
else{
  stoplicht = 685
  fill(0,255,0)
}
circle(1520, stoplicht, 51)

if (licht == 0) {
  fill('red')
}
else if (licht == 1) {
  fill('orange')
}
else if(licht == 2){
  fill('green')
}



// auto's

auto1x += speedOfCar

fill(carColor1);

rect(auto1x,auto1y,300,100);
rect(auto1x+70, auto1y-70, 150, 70)
fill('lightblue')
strokeWeight(2)
rect(auto1x+130, auto1y-50, 90, 50)
fill(0)
circle(auto1x+50, auto1y+100, 70)
circle(auto1x+250, auto1y+100, 70)

if (auto1x >= 1900) {
  auto1x = -300
  carColor1 = color(random(40,255),random(40,255),random(40,255));
}

if (auto1x == 1150 && licht == 2) {
  speedOfCar = 0
}

if(licht == 0) {
  speedOfCar = 10
}
if(licht == 1){
  speedOfCar = 5
}

strokeWeight(0)
fill(102, 49, 13)
rect(1100,910,30,80);
fill('darkgreen')
ellipse(1112, 865,100,150)


sunPositionX = sunPositionX + daytimeSpeed
fill('yellow')
circle(sunPositionX, 100, 100);
if (sunPositionX > 2200) {
  sunPositionX = -200
  
}
// square(1150,800,20)
fill(0)
text("Press M to enable/disable traffic light manual mode", 1570, 20)
if (manualModeActive == 1) {
  fill(0,195,0)
  text ("Manual Mode Enabled", 1570, 35)
    fill(0)
  text("Press 'Enter' to change traffic light", 1570, 50)
}
else if(manualModeActive == 0){
  fill(195,0,0)
  text("Manual Mode Disabled", 1570, 35)

}
fill(255)
wolk1x = wolk1x - cloudSpeed


circle(wolk1x, wolk1y, 100);
circle(wolk1x+60, wolk1y-50, 100);
circle(wolk1x+120, wolk1y, 100);
rect(wolk1x, wolk1y-1, 130, 51);
if (wolk1x < -300) {
  wolk1x = 2000
}
}

function keyPressed() {
  if (key === 'Enter' && manualModeActive == 1) {
    if (licht === 0) {
      licht = 1
    } 
    else if(licht == 2){
      licht = 0
    }
    else {
      licht = 2
    }
  }

   if(key === 'm') {
    if(manualModeActive == 1) {
      manualModeActive = 0
    } else {
      manualModeActive = 1
    }
  }
}

