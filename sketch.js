let sx, sy, sw, sh, dx, dy, dw, dh, fibonS;
let timer = 0;
let posX = 0;
let posY = 0;
let xoff = 0.8;
var diffX = 0;
var diffY = 0;
let chooseArray = 0;
let sourceMaterial = [];
let selectNu, selectNu2;

//fibonacci
var n = 0; // position in equence
var c = 4; // scaling - distance between points
let posiX, posiY; // was posX , posY



function preload() {
  sourceMaterial[0] = loadImage('data/bench1.png');
  sourceMaterial[1] = loadImage('data/fountain1.png');
  sourceMaterial[2] = loadImage('data/fountain2.png');
  sourceMaterial[3] = loadImage('data/fountain3.png');
  sourceMaterial[4] = loadImage('data/path1.png');
  sourceMaterial[5] = loadImage('data/path2.png');
  sourceMaterial[6] = loadImage('data/pond2.png');
  sourceMaterial[7] = loadImage('data/pond3.png');
  sourceMaterial[8] = loadImage('data/pond4.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    
    linearGradient(
      windowWidth/2, 0, //Start point
      windowWidth/2, windowHeight, //End point
      color(180,0, 100, 100), //Start color
      color(255, 80, 100, 10) //End color
    );
    rect(0, 0,  windowWidth,windowHeight);
    
    image(sourceMaterial[8], windowWidth/4, windowHeight/4, windowWidth/2, (windowHeight/2));
    
  //fibonacci addition
    angleMode(DEGREES);
    frameRate(5);
    posiX = (windowWidth/2);
    posiY = (windowHeight/2);
    

    
}

function draw() {

  
    //SETTING AREA ON THE SCREEN
    sx = int(random(0, width));
    sy = int(random(0, height));
    sw = int(random(50, 600));
    sh = int(random(30, 400));
    dx = int(random(-50, (width-50)));
    dy = int(random(-50, (height-50)));
    dw = int(random(20, 200));
    dh = int(random(10, 180));
    
    // fibonacci image size
    fibonS = int(random(220, 280));


    selectNu = (int(random(0, 7)));
    selectNu2 = (int(random(0, 8)));

    //CONTROLLING TIME INTERVALS 
    if (millis() >= (1001+timer)) {
      copyCat();
      timer = millis();
  }

  
    //fibonacci addition
    var a = n * 100;
    var r = c * sqrt(n);
    
    var x = r * cos(a) + posiX; //  move start
    var y = r * sin(a) + posiY; // move start
  
    image((sourceMaterial[selectNu]), x, y, fibonS, fibonS);
    
    n++;
    
    if (n == 40) {
      n=0;
      posiX = (random(0, windowWidth));
      posiY = (random((windowHeight/3), windowHeight));
      
      c = int(random(4, 40));
  }  
}


//PASTING COPY COMAND
function copyCat() {
    copy(sx, sy, sw, sh, dx, dy, dw, dh);
}


function mousePressed() {
    //SELECT IMAGE FROM ARRAY
    chooseArray = sourceMaterial[selectNu2];//change from Nu2

    //IMAGE PASTED IN MOUSE LOCATION
    posX = mouseX;
    posY = mouseY;
}


function mouseDragged() {
  diffX = mouseX - posX;
  diffY = mouseY - posY;

  image(chooseArray, posX, posY, diffX, diffY);
}

function linearGradient(sX, sY, eX, eY, colorS, colorE){
  let gradient = drawingContext.createLinearGradient(
    sX, sY, eX, eY
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;
  // drawingContext.strokeStyle = gradient;
}
