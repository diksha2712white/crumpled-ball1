
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

paper=new Paper(100,600,30);
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);
bin1= new Bin(700,600,10,100)
bin2= new Bin(800,600,10,100)
bin3= new Bin(750,650,110,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  rect(ground.position.x,ground.position.y,width,10)
 fill("red")
  bin1.display()
  bin2.display()
  bin3.display()
}
function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-80})
	}
}


