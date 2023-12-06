let magicnumber = 0;
let font1;

function preload() { 
  font1 = loadFont("data/courbd.ttf"); 
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

}

function draw() {
  magicnumber = mouseY / 3.1 - mouseX / 9.2;
  A = map(mouseX, 0, width, 255, 0); //Alpha
    fill(255, A);
    textSize(magicnumber);
    textFont(font1);
    text("path", mouseX + magicnumber / 2, mouseY + magicnumber / 2);
  
  stroke(0);

}
