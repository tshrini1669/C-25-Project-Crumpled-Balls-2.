var dleft,dright,ddown,ball, ballim, binim, bin, g
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ballim=loadImage("Picture1.png");
	bimim=loadImage("bin.jpg.png");
}

function setup() {
	createCanvas(1500, 600);
ball=createSprite(50,540,0,0);
ball.addImage(ballim);
ball.scale=0.2;
bin=createSprite(1300,535 ,185,15);
bin.addImage(bimim);
bin.scale=0.6;
//dleft=createSprite(1200,540,15,80);
//dright=createSprite(1390,540,15,80);ddown=createSprite(1300,573,185,15);
ball.shapeColor="blue";
//dleft.shapeColor="red";
//dright.shapeColor="red";ddown.shapeColor="red";
g=createSprite(200,592,1000000,15);
g.shapeColor="yellow";
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



