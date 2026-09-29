function setup() {
  createCanvas(400, 400);
//  for(let i = 0; i <= 100; i++){
//    console.log(i)
//     iText = i
//  }
}



let iText;


function draw() {
  background(220);
//  text(iText, 100, 100)

stroke(0)
for(let i = 0; i < 5; i++) {
  rect(50 + 50 * i, 50, 50, 50)
  rect(50*i, 50, 50, 50)
}


}
