var bullet,wall, thinkness
var speed,weight


function setup() {
createCanvas(1600,400); 
speed = random(223,321)
weight = random (30, 52)
thickness = random (22,83)
bullet = createSprite(200,250,50,25)
bullet.shapeColor = color("white")
wall = createSprite(1500, 200,thickness,800)
wall.shapeColor = color(80,80,80)
}

function draw() {
  background("black");  
  bullet.velocityX =speed; 
  if(bullet.isTouching(wall)){
   var d = 0.5*weight*speed*speed/thickness*thickness*thickness;
   bullet.collide(wall)
  bullet.velocityX = 0
    if(d<10){
      bullet.shapeColor= color("green")
    }
    else if (d>10){
      bullet.shapeColor= color("red")
    }
}
  drawSprites();
}