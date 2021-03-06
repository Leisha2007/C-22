var starImg, fairyImg, bgImg;
var fairy , fairyVoice,fairyBody;
var star, starBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	engine = Engine.create();
	world = engine.world;
	starBody = Bodies.circle(650,30,5,{restitution:0.5, isStatic:true});
	fairyBody = Bodies.circle(130,520,5,{restitition:0.5, isStatic:true});
	World.add(world, starBody);
	World.add(world,fairyBody);
	Engine.run(engine);
}

function draw() {
  background(bgImg);
  fairyVoice.play();
  star.x=starBody.position.x;
  star.y=starBody.position.y;
  drawSprites();
  keyPressed();
}

function keyPressed() {
	if(keyDown("left")){
		fairy.x=-5;
	}
	if(keyDown("right")){
		fairy.x=5
	}
	if(keyDown("down")){
		Matter.Body.setStatic(starBody,false);
		star.velocityY=3;
		star.velocityX=0;
	}
	if(starBody.position.y>470){
		Matter.Body.setStatic(starBody,true);
		Matter.Body.setStatic(fairyBody,true);
	}
}
