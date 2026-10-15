// Config
let timeSpeed = 2000   //Default = 2000     Time is by miliseconds (how many miliseconds per in-game minute)

// Variable's & Array's

// Stats

let energy = 100

let food = 100

let thirst = 100

let health = 100

let cash = 999999

// Time

// CLock
let clockY = 80;
let clockX = 1450;

// Time
let previousTime = 0;
let timeMin = 0
let timeHour = 7
let currentDay = 0

// Digital Clock
let digitalClockMinutesTextX = 0
let digitalClockHoursTextX = 0





function setup() {
  createCanvas(1850, 1020);
  timeHour = getItem("hour")
  timeMin = getItem("min")
  currentDay = getItem("dayCount")

}


function draw() {
let hoekMin = map(timeMin, 0, 60, -90, 270);
let hoekHour = map((timeHour % 12) + timeMin / 60, 0, 12, -90, 270);

  background("#b1b1b1");

// Stone O' Meter

fill(255)
stroke("#156b2e")
strokeWeight(10)
rect(525,20,800,140)

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

text("Drink beer", 1420, 310)
text("Smoke weed", 1420, 460)
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
fill("#fffb00")
rect(30,30,energy*2,20)

fill("#816518")
rect(30,90,food*2,20)

fill("#29f1ff")
rect(30,150,thirst*2,20)

fill("#29ff89")
rect(270,30,health*2,20)


// functional




if(energy <= 0){
  health -= 0.02
}
else if(energy >= 0 && energy <= 100){
  energy -= 0.0005
}
if(food <= 0){
  health -= 0.02
}
else if(food >= 0 && food <= 100){
  food -= 0.0008
}
if(thirst <= 0){
  health -= 0.02
}
else if(thirst >= 0 && thirst <= 100){
  thirst -= 0.002
}


// humanoid

fill(255)
strokeWeight(5)

circle(900, 500, 400)


}


function mouseClicked(){

}