const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball1,box1;
var chain;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ball1 = new Ball(300,200,8);
  box1 = new Box (300,100,80,30);
 
  var options={
    bodyA:ball1.body,
    bodyB:box1.body,
    length:160,
    stiffness:0.04
    
    }
    chain=Constraint.create(options);
    World.add(world,chain);
}

function draw() {
  background(0); 
textSize(15);
text("press space to oscillate",10,200);
  Engine.update(engine); 
  box1.display();
ball1.display();
strokeWeight(3);
stroke("white");
line(ball1.body.position.x,ball1.body.position.y,box1.body.position.x,box1.body.position.y);
  drawSprites();
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
  }
}