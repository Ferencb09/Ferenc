function setup() {
  createCanvas(1200, 800);
}


function draw() {
  background(220);

  let kleuren1 = ['red', 'green', 'blue', 'purple', 'yellow']
  let cijfers1 = ['400', '240', '10', '490', '30', '60', '244', '500', '301', '300']


  let x = 60;
  let y = 20;

  //opdracht 1
  for (let getal = 0; getal < kleuren1.length; getal++) {
    fill(kleuren1[getal])
    text(kleuren1[getal], x, y)

    y = y + 20;
  }

  //opdracht 2

  y = 200



  let first = kleuren1.shift()
  kleuren1.push(first)

  for (let getal = 0; getal < kleuren1.length; getal++) {
    fill(kleuren1[getal])
    text(kleuren1[getal], x, y)

    y = y + 20;
  }


  // opdracht 3

  y = 400

  kleuren1.splice(1 , 2)
  
  for(let getal = 0; getal < kleuren1.length; getal++) {
  fill( kleuren1[getal] )
  text( kleuren1[getal], x, y)

  y = y + 20;


  
}
}
