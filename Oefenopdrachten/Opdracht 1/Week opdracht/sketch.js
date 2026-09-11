function setup() {
  createCanvas(2000, 2000);
  noFill();
}

function draw() {
  background(150);

  // Dobbelsteen
  fill(120)
  strokeWeight(0)
  square(710, 710, 210, 10)
  fill(255)
  strokeWeight(5)
  stroke(51);
  square(700, 700, 200, 10);
  strokeWeight(5)
  fill(0)
  circle(745,745,50);
  circle(745,855,50);
  circle(855,745,50);
  circle(855,855,50);
  circle(800,800,50);



  // Naam
    fill(0,0,100)

  strokeWeight(1)
  textSize(50);
  textAlign(LEFT, BASELINE);
  textFont('Georgia');

  let s = "Ferenc.";
  let x = 50, y = 120;
  text(s, x, y);


  // Schaakbord
  fill(255)
  strokeWeight(5)
  square(50, 1250, 400)
  fill(0)
  strokeWeight(0)
  square(50, 1250, 50)
  square(150, 1250, 50)
  square(250, 1250, 50)
  square(350, 1250, 50)
  square(100, 1300, 50)
  square(200, 1300, 50)
  square(300, 1300, 50)
  square(400, 1300, 50)
  square(50, 1350, 50)
  square(150, 1350, 50)
  square(250, 1350, 50)
  square(350, 1350, 50)
  square(100, 1400, 50)
  square(200, 1400, 50)
  square(300, 1400, 50)
  square(400, 1400, 50)
  square(50, 1450, 50)
  square(150, 1450, 50)
  square(250, 1450, 50)
  square(350, 1450, 50)
  square(100, 1500, 50)
  square(200, 1500, 50)
  square(300, 1500, 50)
  square(400, 1500, 50)
  square(50, 1550, 50)
  square(150, 1550, 50)
  square(250, 1550, 50)
  square(350, 1550, 50)
  square(100, 1600, 50)
  square(200, 1600, 50)
  square(300, 1600, 50)
  square(400, 1600, 50)


  // Vlag van USA
  fill(255)
  strokeWeight(0)
  rect(50, 200, 400, 200);
  fill(255,0,0)
  rect(50, 200, 400, 20);
  rect(50, 240, 400, 20);
  rect(50, 280, 400, 20);
  rect(50, 320, 400, 20);
  rect(50, 360, 400, 20);
  fill(0,0,255)
  square(50, 200, 120);
  fill(255)
  strokeWeight(0)
  circle(70,220,10)
  circle(90,220,10)
  circle(110,220,10)
  circle(130,220,10)
  circle(150,220,10)
  circle(80,240,10)
  circle(100,240,10)
  circle(120,240,10)
  circle(140,240,10)
  circle(160,240,10)
  circle(60,240,10)
  circle(70,260,10)
  circle(90,260,10)
  circle(110,260,10)
  circle(130,260,10)
  circle(150,260,10)
  circle(80,280,10)
  circle(100,280,10)
  circle(120,280,10)
  circle(140,280,10)
  circle(160,280,10)
  circle(60,280,10)
  circle(70,300,10)
  circle(90,300,10)
  circle(110,300,10)
  circle(130,300,10)
  circle(150,300,10)

  // Huisje onder de vlag
  fill(255,255,255,30)
  strokeWeight(5)
  rect(50, 750, 400, 200);
  fill(255,255,255,30)
  triangle(50, 750, 250, 650, 450, 750);
  rect(200, 800, 100, 150);
  rect(320, 800, 100, 100);
  line(320, 850, 420, 850);
  line(370, 800, 370, 900);

  // stoplicht
  fill(100)
  strokeWeight(5)
  rect(640, 150, 100, 300);
  fill ('red')
  circle(690,200,70)
  fill(100,100,0)
  circle(690,300,70)
  fill(0,100,0)
  circle(690,400,70)
  fill(80)
  rect(670,450,40,100)

  // Mario Pixel Art
  fill(255,0,0)
  strokeWeight(0)
  rect(1000, 50, 100, 20);
  rect(980, 70, 180, 20);
  fill(255, 219, 176)
  rect(1000, 90, 100, 100);
  rect(1100, 110, 40, 80);
  rect(1100, 110, 60, 60);
  rect(1160, 130, 20, 20);
  rect(980, 110, 20, 40);
  fill(0,0,0)
  rect(1080, 90, 20, 40);
  rect(1080, 150, 80, 20);
  rect(1100, 130, 20, 20);
  fill(130, 96, 56)
  rect(980, 90, 60, 20);
  rect(1000, 110, 20, 40);
  rect(1020, 130, 20, 20);
  rect(980, 150, 20, 20);
  rect(960, 110, 20, 60);
  fill(255,0,0)
  rect(980, 190, 120, 80);
  rect(960, 210, 180, 20);
  rect(940, 230, 220, 20);
  rect(980, 250, 140, 20);
  fill(0,0,255)
  rect(1000, 250, 100, 60);
  rect(1070, 290, 50, 40);
  rect(980, 290, 50, 40);
  fill(79, 56, 29)
  rect(960, 330, 50, 40);
  rect(1090, 330, 50, 40);
  rect(940, 350, 50, 20);
  rect(1100, 350, 60, 20);
  fill(255, 219, 176)
  rect(940, 250, 40, 60);
  rect(1120, 250, 40, 60);
  rect(980, 270, 20, 20);
  rect(1100, 270, 20, 20);

const startX = 1100;
  const startY = 800;
  const pixelSize = 20;

  const C = {
    H: "#2d1d0f",
    S: "#c68e67",
    L: "#d49b73",
    d: "#b77d54",
    W: "#ffffff",
    E: "#2c3493",
    N: "#965637",
    M: "#442211",
  };

  const steveGrid = [
    [C.H, C.H, C.H, C.H, C.H, C.H, C.H, C.H],
    [C.H, C.H, C.H, C.H, C.H, C.H, C.H, C.H],
    [C.H, C.S, C.S, C.S, C.S, C.S, C.S, C.H],
    [C.S, C.S, C.S, C.S, C.S, C.S, C.S, C.S],
    [C.S, C.W, C.E, C.S, C.S, C.E, C.W, C.S],
    [C.S, C.S, C.S, C.N, C.N, C.S, C.S, C.S],
    [C.S, C.S, C.M, C.S, C.S, C.M, C.S, C.S],
    [C.S, C.S, C.M, C.M, C.M, C.M, C.S, C.S],
  ];

  noStroke();

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      fill(steveGrid[row][col]);

      let x = startX + col * (pixelSize * 2);
      let y = startY + row * (pixelSize * 2);

      rect(x, y, pixelSize * 2, pixelSize * 2);
    }
  }

  textSize(30)
  fill(0)
  text('Minecraft Steve', 1100, 790)
}