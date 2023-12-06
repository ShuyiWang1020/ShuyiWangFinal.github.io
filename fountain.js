let font1, img; 
let value1 = 255;
let layer0;

function preload() { 
  font1 = loadFont("data/courbd.ttf"); 
  img = loadImage('data/fountain1.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight,WEBGL);
  angleMode(DEGREES);
  noStroke();
  textFont(font1); 
  textSize(24); 
  textAlign(CENTER, CENTER);


}

function draw(){

  background(0)
  /*radialGradient(
    windowWidth/2, windowHeight/2, 0,//Start pX, pY, start circle radius
    windowWidth/2, windowHeight/2,800,//End pX, pY, End circle radius
    color(255,255,255, 10), //Start color
    color(255, 80, 100, 1) //End color
  );
  rect(0, 0, windowWidth, windowHeight);*/
 
  drawMe(); 
  
  for (var i = 0; i < 12; i++) { 
    drawYou();
    
    for (var j = 0; j < 12; j ++){
       drawFlower(); 
    }
  }
  drawTogether();
  
}



function drawMe() { 
  let time = millis();
  rotateX(time/100 );
  rotateZ(time/100 );
  fill(value1); 
  image(img,-125, -125, 200, 200);
}

function drawYou() { 
  let time = millis();
  rotateX(time / 100);
  rotateZ(time / 200);
  fill(value1); 
  //text('you',  mouseX/3 + random(5), mouseY/3);
   text('Nothing can tame', 0 + random(5), 150);
  flower();
}

function drawTogether() { 
  let time = millis();
  rotateX(time / 100);
  rotateY(time / 100);
  fill(value1); 
  strokeWeight(8); 
  text('Changed every moment', 0 + random(5), 150);
}

// Flower
function drawFlower() { 
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1000);
  fill(value1); 
  flower();
}

// US -- 
function drawUs() { 
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 2000);
  fill(0); 
  text('Ever the same',  mouseX/3 + random(5), height/2);
}

function flower(){ 
  push();
  fill(180, 220, 180, 240);
  translate(mouseX, mouseY);
  noStroke();
    
      sphere(10)
      push()
      translate(0,10,0);
      cone(10, 20);
      pop();
    
  
  pop();
}

