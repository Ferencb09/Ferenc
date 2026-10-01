let particles = [];

function setup() {
  createCanvas(800, 600);
  background(10);
  
  for (let i = 0; i < 250; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      size: random(2, 10),
      speed: random(0.5, 2),
      angle: random(TWO_PI)
    });
  }
}

function draw() {
  background(10, 15, 25, 20);

  for (let p of particles) {
    let noiseValue = noise(p.x * 0.003, p.y * 0.003, frameCount * 0.003);
    let angle = noiseValue * TWO_PI * 4;

    p.x += cos(angle) * p.speed;
    p.y += sin(angle) * p.speed;

    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;

    let r = 100 + 155 * noise(p.x * 0.01);
    let g = 100 + 155 * noise(p.y * 0.01);
    let b = 200 + 55 * noise(p.x * 0.005, p.y * 0.005);

    noStroke();
    fill(r, g, b, 180);
    circle(p.x, p.y, p.size);
  }
}

function keyPressed() {
  particles = [];

  for (let i = 0; i < 250; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      size: random(2, 10),
      speed: random(0.5, 2),
      angle: random(TWO_PI)
    });
  }

  background(10);
}