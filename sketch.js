const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var backgroundImg , towerImg;

function preload() {
backgroundImg = loadImage("./assets/background.gif");
towerImg = loadImage("./assets/tower.png");
  
  
}
function setup() {

  var ball_options = {
    isStatic:true
  }

  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  ground = Bodies.rectangle(0,height,width*2,1,ball_options);
           World.add(world,ground);

  tower = Bodies.rectangle(130,500,200,400,ball_options);
  World.add(world,tower);
  
  angle = 25;
  canon = new Cannon(150,210,130,120,angle);
}

function draw() {
      image(backgroundImg,0,0,windowWidth,windowHeight);
 
  Engine.update(engine);
  
  rect(ground.position.x,ground.position.y,width*2,1);

  push();
  imageMode(CENTER)
  image(towerImg,tower.position.x,tower.position.y,200,400);
  pop();

  canon.display();
   
}
