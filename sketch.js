
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

var world, engine;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background("lavender");
	rectMode(CENTER);
	ellipseMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(380, 200, 550, 20);

	bob1 = new Bob(200, 550, 45);
	bob2 = new Bob(290, 550, 45);
	bob3 = new Bob(380, 550, 45);
	bob4 = new Bob(470, 550, 45);
	bob5 = new Bob(560, 550, 45);

	rope1 = new Rope(bob1.body, roof.body, 400, 200);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lavender");
 
  Engine.update(engine);

	roof.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();

  drawSprites();
 
}



