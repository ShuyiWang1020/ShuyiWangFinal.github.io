let num = 70;
let font1, img;

function preload() { 
  font1 = loadFont("data/courbd.ttf"); 
  img = loadImage('data/pond4.png');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    noStroke();
	textAlign(CENTER, CENTER);
	textSize(80);
	textFont(font1);
  }
  
function draw(){
    //background(230, 30, 23);
  
    radialGradient(
      windowWidth/2, windowHeight/2, 0,//Start pX, pY, start circle radius
      windowWidth/2, windowHeight/2,800,//End pX, pY, End circle radius
      color(255,255,255, 10), //Start color
      color(61,189,244,1) //End color
    );
    rect(0, 0, windowWidth, windowHeight);
    // shadow();

    image(img,windowWidth/4+50, windowHeight/8+50, 600, 600);

    for (let y = 0; y < 400; y += height / num) {
		drawingContext.save();
		noStroke(0);
		
		rect(0, y, width, height / num);
		drawingContext.clip();
		fill(0);
		text("frog", width / 2  , height / 2 + 50 * tan(frameCount * 0.01 + 0.5 * noise(y)));
		drawingContext.restore();
	}
  }
  
function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
    let gradient = drawingContext.createRadialGradient(
      sX, sY, sR, eX, eY, eR
    );
    gradient.addColorStop(0, colorS);
    gradient.addColorStop(1, colorE);
  
    drawingContext.fillStyle = gradient;
  }