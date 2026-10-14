// Config
let timeSpeed = 2000    //Default = 2000     Time is by miliseconds (how many miliseconds per in-game minute)

// Variable's & Array's



// Time

// CLock
let clockY = 80;
let clockX = 1500;

// Time
let previousTime = 0;
let timeMin = 0
let timeHour = 7
let day = 0

// Digital Clock
let digitalClockMinutesTextX = 0
let digitalClockHoursTextX = 0





function setup() {
  createCanvas(1850, 1020);
}

function draw() {
let hoekMin = map(timeMin, 0, 60, -90, 270);
let hoekHour = map((timeHour % 12) + timeMin / 60, 0, 12, -90, 270);

  background("#7f7f7f");

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
text("Drunk O' Meter", 1185,275)


// Time

textSize(60)
fill(0)
text(":", 1620, 100)

if(timeHour <= 9){
  textSize(60)
  fill(0)
  digitalClockHoursTextX = 1585
  text("0", 1555, 100)
}

else{
  textSize(60)
  fill(0)
  digitalClockHoursTextX = 1550
}

if(timeMin <= 9){
  textSize(60)
  fill(0)
  digitalClockMinutesTextX = 1670
  text("0", 1640, 100)
}
else{
  digitalClockMinutesTextX = 1640
}


// Hour
textSize(60)
fill(0)
text(timeHour, digitalClockHoursTextX, 100)

// Min
textSize(60)
fill(0)
text(timeMin, digitalClockMinutesTextX, 100)

// Clock
fill(255)
strokeWeight(7)
stroke(0)
circle(1500, 80, 100)

fill(0)
strokeWeight(5)
line(1500, 30, 1500, 45)
line(1500, 115, 1500, 130)

line(1450, 80, 1465, 80)
line(1550, 80, 1535, 80)

if (millis() - previousTime >= timeSpeed) {
  timeMin++;
  previousTime = millis();

if (timeMin >= 60) {
  timeMin = 0;
  timeHour++;
 
if (timeHour >= 24) {
      timeHour = 0;
      day++
   
    }
  }
}

textSize(40)
stroke(0)
strokeWeight(0)
text("day:", 1560, 140)
text(day, 1640, 143)

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

line(1500,80,1500,80)


}