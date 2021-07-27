
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var stone,plane;
var iron,hammer,rubber,sand1,sand2,sand3,sand4,sand5,sand6;



function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane=new Plane(600,height,1200,20);
	rubber=new Rubber(900,450,70);
	hammer=new Hammer(10,100);
	iron=new Iron(300,350);
	stone=new Stone(700,320,100,100);
	sand1=new Sand(505,450,10);
	sand2=new Sand(510,450,10);
	sand3=new Sand(515,450,10);
	sand4=new Sand(520,450,10);
	sand5=new Sand(525,450,10);
	sand6=new Sand(515,445,10);
	

	Engine.run(engine);
  
}


function draw() {
  
  background("lightblue");
Engine.update(engine);
stone.display();
plane.display();
iron.display();
rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
 
 
}



