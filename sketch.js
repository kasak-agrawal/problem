
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground1;
var wall1;
var wall2;
var ball;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

var balloptions = {
	restitution:0.3,
	friction:0,
    density:1.2
}
ball = Bodies.circle(150, 200, 25, balloptions);
World.add(world, ball);
Engine.run(engine); 
}

ground1 =new ground(400, 690, 800,20);
wall1 = new Wall1(550, 600, 10, 100);


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  //ground1.show();
  //wall1.show();
 wall1.display();
  drawSprites();
 
}



