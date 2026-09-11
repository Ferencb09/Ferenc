function setup() {
  createCanvas(1600, 950);
}
 let y = 0;
 let x = 0;
 let clr = 0;
function draw() {
  background(200);





  console.log(clr);
fill("orange")
rect(0,0, 1600,950);
  
fill("yellow")
rect(x,y, 1600,950);
  y = y + 1

  fill(220,0,0);
  circle(850,430,400);
  fill(230,0,0,20);
  circle(850,430,500);

  circle(x,y,500);
fill(60);
strokeWeight(0);

triangle(50,950, 650,950, 580,650)
triangle(50,950, 650,950, 580,650)
triangle(300,950, 950,950, 780,450)
triangle(500,950, 1250,950, 820,400)
triangle(1600,950, 1150,950, 1170,650)
triangle(1500,950, 1050,950, 930,450)
triangle(500,950, 1250,950, 870,380)


}