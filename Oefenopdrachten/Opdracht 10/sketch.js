let button;
let button2;

let point = ['']

function setup() {
  createCanvas(1200, 800);
  button = createButton('1.  Apple');
	button.position(500, 130);
	button.style('background-color', '#acadac');
  button.size( 360, 60);
	button.style('font-size', '32px');
	button.mousePressed(buttonClicked);
  button.style('border', '4px black')

  button2 = createButton('2.  Samsung');
	button2.position(800, 130);
	button2.style('background-color', '#b7b9b7');
  button2.style('width', '150px');
  button2.style('height', '50px');
	button2.style('font-size', '25px');
	button2.mousePressed(button2Clicked);

  button3 = createButton('3.  Oneplus');
	button3.position(500, 230);
	button3.style('background-color', '#acadac');
  button3.style('width', '170px');
  button3.style('height', '50px');
	button3.style('font-size', '20px');
	button3.mousePressed(button3Clicked);

  button4 = createButton('4.  Xiaomi');
	button4.position(800, 230);
	button4.style('background-color', '#acadac');
  button4.style('width', '150px');
  button4.style('height', '50px');
	button4.style('font-size', '20px');
	button4.mousePressed(button4Clicked);
}
function buttonClicked() {
    console.log('Button1 was pressed!');
}

function button2Clicked() {
  console.log('Button2 was pressed!');
}

function button3Clicked() {
  console.log('Button3 was pressed!');
}


function button4Clicked() {
  console.log('Button4 was pressed!');
}




function draw() {
  background(220);
}
