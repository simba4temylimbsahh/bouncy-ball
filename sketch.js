const Engine=Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myEngine, myWorld
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();// .world
  myWorld = myEngine.world 
  
 

var options = {

  isStatic: true
}
var options1 = {

  restitution: 1
}



ball = Bodies.circle(200, 200, 20, options1)
World.add(myWorld, ball)
ground = Bodies.rectangle(200, 400, 400, 20, options)
World.add(myWorld,ground)
console.log(ground.position.x);

}

function draw() {
  background(0); 
  Engine.update(myEngine) 
  rectMode(CENTER)
 rect (ground.position.x,ground.position.y, 400, 20)
ellipseMode(RADIUS)
ellipse (ball.position.x, ball.position.y, 20,20)

}