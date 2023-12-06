rez1 = 0.01;
rez2 = 0.007;
rez3 = 0.006;
let size1 = 30;
let gap = 0;

let lets = ['b','e','n','c','h','b'];
let font1, img; 

function preload() { 
  font1 = loadFont("data/courbd.ttf"); 
  img = loadImage('data/bench1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //colorMode(HSB,360,120,100,255);
  textFont(font1);
  textSize(size1);
  angleMode(DEGREES);
    noStroke();
  
}

function draw(){
  radialGradient(
      windowWidth/2, windowHeight/2, 0,//Start pX, pY, start circle radius
      windowWidth/2, windowHeight/2,800,//End pX, pY, End circle radius
      color(255,255,255, 10), //Start color
      color(244,178,61, 1) //End color
    );
    rect(0, 0, windowWidth, windowHeight);
   
   
  
  for (x = 0; x<width;x+=size1+gap){
    for (y=0;y<height;y+=size1+gap){
      n1 = noise(x*rez1,y*rez1);
      n2 = noise(x*rez2+10000,y*rez2+10000);
      fill(80,180,140);
      push();
      translate(x,y);
      rotate((n2-0.5)*PI*frameCount);
     text(lets[floor(n1*6)],0,0);
      pop();
    }
  }

  image(img,250, -150, 1000, 1000);

  
}

function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
    let gradient = drawingContext.createRadialGradient(
      sX, sY, sR, eX, eY, eR
    );
    gradient.addColorStop(0, colorS);
    gradient.addColorStop(1, colorE);
  
    drawingContext.fillStyle = gradient;
  }