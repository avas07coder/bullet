var wall, thickness;
var bullet, speed, weight;

function setup(){
 function hasCollided (lbullet,lwall)
 {
   bulletRightEdge=lbullet.x + lbullet.width;
   wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;

 }
  createCanvas(1600,400);
 
  speed = random(223,321);
 thickness = random(23,83);
 weight = random(30,52);
 
 bullet = createSprite(50,200,30,10);
 wall=createSprite(1200,200,thickness,height/2);
}

function draw(){
  background(0,0,0);
  
  bullet.velocityX = speed;
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
 
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage<10){
      wall.shapeColor=color("green");
    }

    if(damage>10){
      wall.shapeColor=("red");
    }
  }
    drawSprites();
}