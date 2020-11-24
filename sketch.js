//to create sprite
var ground;
var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;

var survivingTime=0;

function preload() {
  
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  survivingTime = 0;
}

function setup() {

//to create ground
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x)

//to create monkey
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  
//for sur time 
  survivngTime=0;
}

function draw() {

//for background
  background("lightBlue");
  text("SurvivingTime: " + survivingTime, 100, 50);
  survivingTime = Math.ceil(frameCount / frameRate())
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  
  //jump when the space key is pressed
  if (keyDown("space") && monkey.y >= 200) {
    monkey.velocityY = -12;
  }
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8

//to collide the monkey from ground 
  monkey.collide(ground)

//for function
  Food();
  ob();
  
  //to draw sprites
  drawSprites();
}

function Food() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600, 120, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;

    //assign lifetime to the variable
    banana.lifetime = 200;
  }
}

function ob() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(900, 335, 40, 10);
    obstacle.x = Math.round(random(400, 500));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;

    //assign lifetime to the variable
    obstacle.lifetime = 200;
  }
}