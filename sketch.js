const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground,ball;

var engine, world;

function setup() {

  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

    var  ground_options = {
          isStatic: true 
      }

  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

      var ball_options = {

        restitution: 1.0

      }

  ball = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);

 /* object = Bodies.rectangle(200,100,50,50);
  World.add(world,object);
  console.log(object);
  console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);*/
  
}

function draw() {
  background("maroon"); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);  
  ellipse(ball.position.x,ball.position.y,20,20);
 // rect(200,200,50,50);
  drawSprites();
}