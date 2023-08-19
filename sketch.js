var wallImg, wall;
var brickImg, brick, brickGroup;
var girl, girlImg;
var gameState = "play"

function preload(){
  wallImg = loadImage("wall.png");
  brickImg = loadImage("brick.png");
  brickGroup=new Group()
  girlImg = loadImage("rockclimbing.png");
}

function setup() {
  createCanvas(600, 600);
  wall = createSprite(300,300);
  wall.addImage("wall",wallImg);
  wall.velocityY = 1;
  girl=createSprite(300,300)
  girl.addImage(girlImg)
  girl.scale=0.3

  
}

function draw() { 
  background(200);
  if(gameState==="play"){
    spawnBrick()

    if(keyDown("space")){
      girl.velocityY=-5 
    }
    girl.velocityY=girl.velocityY+0.3
    if(wall.y > 400){
      wall.y = 300
      }
    if(keyDown("right_arrow")){
      girl.x=girl.x+5
    }
    if(keyDown("left_arrow")){
      girl.x=girl.x-5
    }

    drawSprites();
  }
  if(gameState==="end"){
    girl.destroy()
    text("game over",300,300)
  }
}

function spawnBrick(){
  if(frameCount%100===0){
    brick=createSprite(random(150,400),-100)
    brick.velocityY= 1
    brick.addImage(brickImg)
    girl.depth=brick.depth+1
    brick.lifetime=780
    brickGroup.add(brick)
    brick.scale=0.1
  
    }


}

