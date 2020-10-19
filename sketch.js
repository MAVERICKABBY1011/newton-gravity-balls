
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pointA=this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;

strokeWeight(2);

var Anchor1x=pointA.x
var Anchor1x=pointB.y
var anchor2X=pointB.x+this.offsetX
var anchor2Y=pointB.x+this.offsetY
line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)

constructor(body1,body2,offsetX,offsetY){
	this=offsetX,offsetY
	this=offsetY.offsetX
	var options{
		bodyA:body1,
		bodyB,body2,
		pointB:{x:this.offsetX,y:this.offsetY}
	}
	//console.log(options);
	this.Response.Constraint.create(options)
	world.add(world,this.rope)
}                                        

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


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



