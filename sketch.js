
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20);
	t1 = new Trash1(1000,340,20,100);
	t2 = new Trash1(790,340,20,100);
	// t3 = new Trash1(895,380,190,20);
	p = new Paper(225,250,50);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  ground.display()
  t1.display()
  t2.display()
//   t3.display()
  p.display()
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(p.body,p.body.position,{x:25,y:-25})

}

}


