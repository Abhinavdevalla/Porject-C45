var human, humanImg;;
var backgrounds,backgroundImg;;
var ground;


function preload(){
  backgroundImg = loadImage("background.jpg");
  humanImg = loadImage("humanes.png");
}
function setup() {
  createCanvas(1200,800);

  backgrounds = createSprite(0,0,1200,1600);
  backgrounds.addImage(backgroundImg);
  backgrounds.scale = 5;
  backgrounds.x = backgrounds.width/2;
  backgrounds.velocityX = -5;

  human = createSprite(150,700,100,100);
  human.addImage(humanImg);
  human.scale = 0.5;

  ground = createSprite(0,790,1200,20);
  ground.x = ground.width/2
  ground.velocityX = -5;
  ground.visible = false;
  

}

function draw() {
  background(255,255,255);
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  if(backgrounds.x<0){
    backgrounds.x = backgrounds.width/2
  }
  if(keyDown("SPACE")){
    human.velocityY = -10;
  }
   human.velocityY+=0.8;
   human.collide(ground);
  drawSprites();
}
