function setup() {
  createCanvas(1200, 800);
  maakKunst();
}

function maakKunst() {
  background(255);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);z

    let kleurR = random(255);
    let kleurG = random(255);
    let kleurB = random(255);

    fill(kleurR, kleurG, kleurB);
    stroke(10);

    let vorm = floor(random(4));

    if (vorm == 0) {
      let grootte = random(10, 150);
      circle(x, y, grootte);
    }

    else if (vorm == 1) {
      let breedte = random(10, 150);
      let hoogte = random(10, 150);
      rect(x, y, breedte, hoogte);
    }

    else if (vorm == 2) {
      let grootte = random(20, 150);

      triangle(
        x, y - grootte,
        x - grootte, y + grootte,
        x + grootte, y + grootte
      );
    }

    else {
      let breedte = random(20, 150);
      let hoogte = random(20, 100);
      ellipse(x, y, breedte, hoogte);
    }
  }
}

function keyPressed() {
  maakKunst();
}