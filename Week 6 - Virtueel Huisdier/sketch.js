// Config
let timeSpeed = 2000;   //Default = 2000     Time is by miliseconds (how many miliseconds per in-game minute)

// Variable's & Array's\

let Images = [];

// PNG
function preload(){
Images.push(loadImage("Afbeeldingen/essentials/png/Angry.png"))
Images.push(loadImage("Afbeeldingen/essentials/png/Happy.png"))
Images.push(loadImage("Afbeeldingen/essentials/png/Sad.png"))
Images.push(loadImage("Afbeeldingen/essentials/png/Sick.png"))
Images.push(loadImage("Afbeeldingen/essentials/png/Tired.png"))
Images.push(loadImage("Afbeeldingen/essentials/png/WeedLow.png"))
Images.push(loadImage("Afbeeldingen/essentials/png/WeedMed.png"))
Images.push(loadImage("Afbeeldingen/essentials/png/WeedHigh.png"))
Images.push(loadImage("Afbeeldingen/essentials/png/WeedMax.png"))
}
// Stats

let energy = 100;

let food = 100;

let thirst = 100;

let health = 100;

let cash = 10;

let weed = 0

let high = 0

let beers = 5

let drunk = 0

// Time

// CLock
let clockY = 80;
let clockX = 1450;

// Time
let previousTime = 0;
let timeMin = 0;
let timeHour = 7;
let currentDay = 0;

// Digital Clock
let digitalClockMinutesTextX = 0;
let digitalClockHoursTextX = 0;

// Real life Date

let currentYear;
let m;
let d;

let h;
let min;
let s;


// functions

let confirmation = false;
let Cyes = 195;
let Cno = 195;
let WarningText = "Error!";
let WarningTime = 0;
let barY = 1020;
let barX = 120
let timepaused = 0



function setup() {
  createCanvas(1850, 1020);
  timeHour = getItem("hour")
  timeMin = getItem("min")
  currentDay = getItem("dayCount")

  thirst = getItem("Thirst")
  energy = getItem("Energy")
  food = getItem("Hunger")
  health = getItem("Health")

  cash = cash * 10
  
}


function draw() {
  // update IRL time
  currentYear = year();
  m = month();
  d = 29  ;
  
  h = hour();
  min = minute();
  s = second();
  textAlign(LEFT, BASELINE);
  textStyle(NORMAL);
let hoekMin = map(timeMin, 0, 60, -90, 270);
let hoekHour = map((timeHour % 12) + timeMin / 60, 0, 12, -90, 270);

  background("#b1b1b1");


// Stone O' Meter

fill(255)
stroke("#156b2e")
strokeWeight(10)
rect(525,20,800,140)

fill(0,255,0)
rect(525,20,high,140)

// Text Stone O' Meter

textSize(40)
fill(0)
strokeWeight(0)
text("Stone O' Meter", 535,205)


// Drunk O' Meter

fill(255)
stroke('#8c8939')
strokeWeight(10)
rect(925,175,400,80)

fill(255,225,0)
rect(925,175,drunk,80)

// Text Drunk O' Meter

textSize(20)
fill(0)
strokeWeight(0)
text("Drunk O' Meter", 1185,280)


// Time

textSize(60)
fill(0)
text(":", 1610, 90)

if(timeHour <= 9){
  textSize(60)
  fill(0)
  digitalClockHoursTextX = 1575
  text("0", 1545, 90)
}

else{
  textSize(60)
  fill(0)
  digitalClockHoursTextX = 1540
}

if(timeMin <= 9){
  textSize(60)
  fill(0)
  digitalClockMinutesTextX = 1660
  text("0", 1630, 90)
}
else{
  digitalClockMinutesTextX = 1630
}


// Hour
textSize(60)
fill(0)
text(timeHour, digitalClockHoursTextX, 90)

// Min
textSize(60)
fill(0)
text(timeMin, digitalClockMinutesTextX, 90)

// Clock
fill(255)
strokeWeight(7)
stroke(0)
circle(1450, 80, 100)

fill(0)
strokeWeight(5)
line(1450, 30, 1450, 45)
line(1450, 115, 1450, 130)

line(1400, 80, 1415, 80)
line(1500, 80, 1485, 80)

if (millis() - previousTime >= timeSpeed) {
  timeMin++;
  previousTime = millis();

if (timeMin >= 60) {
  timeMin = 0;
  timeHour++;
 
if (timeHour >= 24) {
      timeHour = 0;
      currentDay++
   
    }
  }
}

textSize(40)
stroke(0)
strokeWeight(0)
text("day:", 1560, 140)
text(currentDay, 1640, 143)

// LineHour
  stroke(100);
  strokeWeight(6);
  line(
    clockX, clockY,
    clockX + cos(radians(hoekHour)) * 25,
    clockY + sin(radians(hoekHour)) * 25
  );

// LineMin
  stroke(100)
  strokeWeight(6);
  line(
    clockX, clockY,
    clockX + cos(radians(hoekMin)) * 40,
    clockY + sin(radians(hoekMin)) * 40
  );

line(1450,80,1450,80)

// saving system

 storeItem("hour", timeHour);
 storeItem("min", timeMin)
 storeItem("dayCount", currentDay)

 storeItem("Health", health)
 storeItem("Hunger", food)
 storeItem("Thirst", thirst)
 storeItem("Energy", energy)
 
fill(255)
stroke(0)

// Buttons

rect(40,250,400,100)
rect(40,400,400,100)
rect(40,550,400,100)
rect(40,700,400,100)

rect(1410,250,400,100)
rect(1410,400,400,100)
rect(1410,550,400,100)
rect(1410,700,400,100)

// Text Buttons

strokeWeight(0)
fill(0)

text("Go to bed", 50, 310)
text("Eat food", 50, 460)
text("Drink water", 50, 610)
text("Go to doctor", 50, 760)

text("Drink beer" + "  (" + beers + ")", 1420, 310)
text("Smoke weed" + "  (" + weed + ")", 1420, 460)
text("Go to work", 1420, 610)
text("Go to the dealer", 1420, 760)

// stats
strokeWeight(2)
fill(255)

strokeWeight(0)
textSize(20)
fill(0)
text("Energy", 30, 25)
text("Food", 30, 85)
text("Thirst", 30, 145)
text("Health", 270, 25)


strokeWeight(2)
fill(255)
stroke("#999b16")
rect(30,30,200,20)
stroke("#5e4500")
rect(30,90,200,20)
stroke("#0089b3")
rect(30,150,200,20)
stroke("#0fb300")
rect(270,30,200,20)

strokeWeight(0)
rect(260,80,240,80)

strokeWeight(4)

stroke("#859210")
fill("#e7ff0e")
circle(300, 120, 60)
fill(0)
textSize(45)
strokeWeight(0)
text("$", 288, 135)
text(cash, 340, 135)


// bar
fill("#e5ff00")
rect(30,30,energy*2,20)

fill("#816518")
rect(30,90,food*2,20)

fill("#29f1ff")
rect(30,150,thirst*2,20)

fill("#29ff89")
rect(270,30,health*2,20)


// functional


if(energy <= 0 && health >= 0){
  health -= 0.02
}
else if(energy >= 0 && energy <= 100){
  energy -= 0.0005
}
if(food <= 0 && health >= 0){
  health -= 0.02
}
else if(food >= 0 && food <= 100){
  food -= 0.0008
}
if(thirst <= 0 && health >= 0){
  health -= 0.02
}
else if(thirst >= 0 && thirst <= 100){
  thirst -= 0.002
}


if(thirst <= 0 && food <= 0 && health >= 0){
  health -= 0.08
}
else if(food <= 0 && energy <= 0 && health >= 0){
  health -= 0.04
}
else if(thirst <= 0 && energy <= 0 && health >= 0){
  health -= 0.04
}
else if(thirst <= 0 && energy <= 0 && food <= 0 && health >= 0){
  health -= 0.16
}



// humanoid

fill(255)
strokeWeight(5)

circle(900, 500, 400)

// Death screen

if(health <= 0){
  fill(0,0,0,200)
  rect(0,0,1850,1080)
  fill(0)
  stroke(100)
  rect(0,300,1850,300)
  fill(255)
  strokeWeight(0)
  textSize(100)
  text("you died!", 680, 420)
  fill(0,255,0)
  strokeWeight(5)
  stroke(0,100,0)
  rect(620,480,528,100,20)
  textSize(70)
  strokeWeight(4)
  fill(0)
  stroke(100,200,100)
  text("Play Again", 710, 550)
  
}
if(confirmation == true){

if(mouseX >= 320 &&  mouseX <= 720 &&  mouseY >= 550 &&  mouseY <= 720){
     Cyes = 255
  }
else{Cyes = 195}

if(mouseX >= 1080 &&  mouseX <= 1480 &&  mouseY >= 550 &&  mouseY <= 720){
     Cno = 255
  }
else{Cno = 195}
  


  fill(0,0,0,200)
  rect(0,0,2000,2000)
  
  strokeWeight(5)
  stroke(0)
  fill(100)
  
  
  rect(300,240,1200,500,20)
  
  fill(0,Cyes,0)
  rect(320,550,400,170,20)
  fill(Cno,0,0)
  rect(1080,550,400,170,20)

  textSize(75)
  fill(0)
  strokeWeight(1)
  text("Yes",440,660)
  text("Cancel",1150,660)
  
  text("This costs $50, Are you sure?",410,400)
  
  if(mouseX >= 1410 && mouseX <= 1810 && mouseY >= 250 && mouseY <= 350){high = 80
  console.log("yep")}
  else{high = 0}
 }


fill(0)
if(confirmation == true) {fill(255)}
stroke(0)
strokeWeight(0)
textSize(20)
text("mouseX: " +  mouseX, 100, 200)
text("mouseY: " +  mouseY, 100,220)

// pop-up bar

if(mouseY >= 800 && barY >= 900){
  barY -= 20
}
else if(mouseY <= 800 && barY <= 1020) {barY += 10}
else if(barY < 900 && mouseY <= 800) {barY = 900}

fill(50)

rect(0,barY,1850,200)

fill(200)
rect(20,barY+10,560,110,100)

// Real Life Date
textSize(32);
textStyle(BOLD);
textAlign(LEFT, CENTER);
fill(0)
text(d + "/" + m + "/" + currentYear, 180, barY+65);
text(nf(h, 2) + ":" + nf(min, 2) + ":" + nf(s, 2), 370, barY+65);


if(mouseY >= 900 && mouseX <= 590 && barX <= 540){
   barX += 17.9
}
else if(barX >= 120 && (mouseX >= 590 || mouseY <= 900 && mouseX <= 590)){
  barX -= 17.9
}

stroke(140)
if(barX >= 120){strokeWeight(5)}
fill(170)
rect(26,barY+15,barX,100,100)
fill(140)
strokeWeight(5)
rect(26,barY+15,120,100,100)

// Time control icons
fill(0)
stroke(0)
strokeWeight(15)

if(timepaused == 1){

line(65,barY+90,65,barY+35)
line(105,barY+90,105,barY+35)
} else{
triangle(70,barY+95,110,barY+65,70,barY+35)}



}


function mouseClicked(){
  // Cheats / Debug
if(mouseX >= 0 && mouseX <= 50 && mouseY >= 0 && mouseY <= 50){
  health = 100
  thirst = 100
  food = 100
  energy = 100
}
if(mouseX >= 1800 && mouseX <= 1850 && mouseY >= 0 && mouseY <= 50){
 timeHour = 21
 timeMin = 30
 thirst = 10
 food = 10
 energy = 10
}

// Sleep

if(confirmation == false && health != 0){

if(mouseX >= 40 && mouseX <= 440 && mouseY >= 250 && mouseY <= 350 && (timeHour <= 6 || timeHour >= 20) && energy <= 100){
  energy = 100
  timeHour = 7
  timeMin = 0
}
else if(timeHour >= 20 && timeHour <= 24){
  day++
}
}

// Drink Water

if(mouseX >= 40 && mouseX <= 440 && mouseY >= 550 && mouseY <= 650 && thirst <= 100){
  if(thirst >= 80){
    let som = 0;
    som = 100 - thirst
    thirst += som
  }
  else{
  thirst += 20
  }
}

// Eat Food

if(mouseX >= 40 && mouseX <= 440 && mouseY >= 400 && mouseY <= 500 && food <= 100){
   if(food >= 80){
    let som = 0;
    som = 100 - food
    food += som
  }
  else{
  food += 20
  }
 

// Drink Beer
if(mouseX >= 1410 && mouseX <= 1810 && mouseY >= 250 && mouseY <= 350 && beers >= 1){
  drunk += 20
  beer -= 1
}


// Smoke Weed

// Go to Work

// Dealer



}



// Go to doctor

if(mouseX >= 40 && mouseX <= 440 && mouseY >= 700 && mouseY <= 800){
confirmation = true


}

if(confirmation == true && Cyes == 255 && cash >= 50 && health < 100){
  cash -= 50
  health = 100
  timeHour += 1
  confirmation = false
  Cyes = 195
  Cno = 195
}
if(confirmation == true && Cno == 255){
  confirmation = false
  Cyes = 195
  Cno = 195
}


if(confirmation == true && Cyes == 255 && cash < 50){
  confirmation = false
  Cyes = 195
  Cno = 195
}
if(confirmation == true && Cyes == 255 && health == 100){
  confirmation = false
  Cyes = 195
  Cno = 195
}


if(mouseX >= 620 && mouseX <= 1150 && mouseY >= 480 && mouseY <= 580 && health == 0){
  timeHour = 7
  timeMin = 0
  cash = 100
  energy = 100
  health = 100
  thirst = 100
  food = 100
  day = 0
}


// Time Control



}