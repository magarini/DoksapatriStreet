let x, y, z;
let xpos, ypos;
let backgroundImg;
let mpatsoi;
let xMpatswn;
let yMpatswn;
let person;
let mpatsoSpeed;

function preload() {
  backgroundImg = loadImage('doksapatri2.jpg');
  mpatsoi=loadImage('30.png')
  person=loadImage('person.gif')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
    // default values
  xpos = 0;
  ypos = windowHeight/2;
  x = 0;
  y = 0;
  // frameRate(15);
  xMpatswn=windowWidth;
  yMpatswn=height/2;
  mpatsoSpeed=1;
}

function draw() {
  background(255);

  
    // add/subract xpos and ypos
  xpos = xpos + x;
  ypos = ypos - y;
  


  
  //   // wrap ellipse if over bounds
  // if(xpos > windowWidth) { xpos = windowWidth; x=-x }
  // if(xpos < 0) { xpos = 0; x=-x}
  // if(ypos > windowHeight) { ypos = windowHeight; y=-y }
  // if(ypos < 0) { ypos = 0; y=-y }
  
  console.log('x',xpos,'imgwidth',backgroundImg.width)
  
    push();
  // scale(0.2)
  image(backgroundImg,xpos,0);

  pop();
  
image(person,width/2,height/2);  
    if(xpos<-backgroundImg.width){
    xpos=width;
    // image
      
    
    
  }
    push();

  // scale(0.1);
  image(mpatsoi,xMpatswn,yMpatswn)
    pop();
if (xMpatswn<-mpatsoi.width){
  xMpatswn=windowWidth;
  mpatsoSpeed=random(1,8);
}
  
    // draw ellipse
  fill(255, 0, 0);
  ellipse(xpos, ypos, 25, 25);
  xMpatswn=xMpatswn-mpatsoSpeed;
  
}




// accelerometer Data
window.addEventListener('devicemotion', function(e) 
{
  // get accelerometer values
  x = 0.2*parseInt(e.accelerationIncludingGravity.x);
  y = parseInt(e.accelerationIncludingGravity.y);
  z = parseInt(e.accelerationIncludingGravity.z); 
});