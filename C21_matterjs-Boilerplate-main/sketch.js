const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var left,right,ground,topwall

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  button1 = createImg ("push.png")
  button1.position (220,30)
  button1.size (50,50)
  button1.mouseClicked (Hforce)

  button2 = createImg ("push.png")
  button2.position (100,30)
  button2.size (50,50)
  button2.mouseClicked (Vforce)

  var options = {
    restitution : 0.95
  }

  ball=Bodies.circle (200,100,20,options)
  World.add(world,ball)
  

  ground = new Ground (200,390,400,20)

  left = new Ground (10,200,20,400)

  right = new Ground (390,200,20,400)

  topwall = new Ground (200,10,400,20)
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground.display ()
  left.display ()
  right.display ()
  topwall.display ()
  
  ellipse(ball.position.x,ball.position.y,20)
}

function Hforce () {
  Matter.Body.applyForce (ball,{x:0,y:0},{x:0.05,y:0})
}

function Vforce () {
  Matter.Body.appleForce (ball,{x:0,y:0},{x:0,y:-0.05})
}
