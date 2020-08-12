
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(240,500,20)
    bob2 = new Bob(280,500,20)
    bob3 = new Bob(320,500,20)
    bob4 = new Bob(360,500,20)
	bob5 = new Bob(400,500,20)
	bob6 = new Bob(440,500,20)
	bob7 = new Bob(480,500,20)
	bob8 = new Bob(520,500,20)
	bob9 = new Bob(560,500,20)

	roof = new Roof(width/2,100,500,20)
	
  rope1 = new Rope(bob1.body,roof.body,-40*4,0)
  rope2 = new Rope(bob2.body,roof.body,-40*3,0)
  rope3 = new Rope(bob3.body,roof.body,-40*2,0)
  rope4 = new Rope(bob4.body,roof.body,-40*1,0)
  rope5 = new Rope(bob5.body,roof.body,-40*0,0)
  rope6 = new Rope(bob6.body,roof.body,-40*-1,0)
  rope7 = new Rope(bob7.body,roof.body,-40*-2,0)
  rope8 = new Rope(bob8.body,roof.body,-40*-3,0)
  rope9 = new Rope(bob9.body,roof.body,-40*-4,0)


    Engine.run(engine);
  
}


function draw() {
  background("pink");
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
  rope8.display();
  rope9.display();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  bob8.display();
  bob9.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:100})
  }
}

