let x = 1
let y = 1

function setup() {
  createCanvas(1855, 1000);
}

function draw() {
  background('skyblue');
  x += 1;
  strokeWeight(0);
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
  triangle(350,490,450,420,585,500); // Berg2sneeuwA
  fill(230)
  triangle(350,490,450,420,400,492) // Berg2sneeuwB
  fill(180)
  triangle(600,700,770,550,1100,700); //berg 3
  fill(140);
  triangle(600,700,770,550,700,700); //berg 3s

// Roads
  fill(30);
  quad(0,950,0,780,1855,780,1855,950);
  fill(255);
  rect(0,860,50,10);
  rect()
  
}
