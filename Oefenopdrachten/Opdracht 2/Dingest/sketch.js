let x = 1
let y = 1
let licht; // 0 rood, 1 oranje, 2 groen


//auto
let auto1x = 200
let auto1y = 800

function setup() {
  createCanvas(1855, 1000);
  licht = 2
}

function draw() {
  background('skyblue');
  x += 1;
  strokeWeight(0);
  
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


// StopLicht
fill(170)
rect(1500, 710, 40, 65)
rect(1480, 530, 80, 200)


if (licht == 0) {
  fill('red')
}
else if (licht == 1) {
  fill('orange')
}
else if(licht == 2){
  fill('green')
}
circle(100, 100, 100)

// auto's

auto1x = auto1x + 1


fill('white')

rect(auto1x,auto1y,300,100);
rect(auto1x+70, auto1y-70, 150, 70)
fill('lightblue')
strokeWeight(2)
rect(auto1x+130, auto1y-50, 90, 50)
fill(0)
circle(auto1x+50, auto1y+100, 70)
circle(auto1x+250, auto1y+100, 70)








  text(licht,10,20);

}

function keyPressed() {
  if (key === 'Enter') {
    if (licht === 0) {
      licht = 2
    } else {
      licht--
    }
  }
}
x += 1;
