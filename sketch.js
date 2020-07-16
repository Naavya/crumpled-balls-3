
var ground,paper1
var paperImg, dustbinImg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
    fill ("white")
	//Create the Bodies Here.
	ground=Bodies.rectangle(800,670,width,30,{isStatic:true})
	World.add(world,ground)
	
	
	paper1=new Paper(200,450,80)
	paper1.shapeColor="purple"

	
	
	paperbasket4= new Dustbin(900,660,75,125)
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  paper1.display()
  paperbasket4.display()
  
  
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:185,y:-185})
	}
}



