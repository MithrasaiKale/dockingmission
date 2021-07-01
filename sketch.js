var spaceship,spaceshipImg
var iss,issImg
var bgImg
function preload(){
bgImg=loadImage("spacebg.jpg")
spaceshipImg=loadImage("spacecraft1.png")
issImg=loadImage("iss.png")
}





function setup() {
  createCanvas(800,400);
  spaceship=createSprite(500,200,30,30)
  iss=createSprite(100,200,10,10)
  spaceship.addImage(spaceshipImg) 
  iss.addImage(issImg)
  }

function draw() {
  background(bgImg);  
if(keyDown(DOWN_ARROW)){
  spaceship.y=spaceship.y+10
}
if(keyDown(LEFT_ARROW)){
  spaceship.x=spaceship.x-10
}
if(keyDown(RIGHT_ARROW)){
  spaceship.x=spaceship.x+10
}
if(keyDown(UP_ARROW)){
  spaceship.y=spaceship.y-10
}
if(spaceship.isTouching(iss)){
  text("docking sucsess!",500,200)
}

  drawSprites();

  

  
}



