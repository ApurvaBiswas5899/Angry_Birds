const { Engine, World, Mouse, Bodies, MouseConstraint, Constraint } = Matter;
let ground;
const boxes = [];
let bird;
let world, engine;
let mConstraint;
let slingshot;
let blueImg;
let boxImg;

function preload() {
  pinkImg = loadImage('pink.png');
  redImg = loadImage('red.png');
  whiteImg = loadImage('white.png');
  yellowImg = loadImage('yellow.png');
  blueImg = loadImage('blue.png');
  boxImg = loadImage('box.png');
}

function setup() {
  const canvas = createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width / 2, height - 10, width, 20);
  
  for(let i = 0; i < 3; i++){ 
    boxes[i] = new Box(450, 300 - i * 75, 50, 75);
  }
  
  bird = new Bird(150, 300, 15);
  
  slingshot = new SlingShot(150, 300, bird.body);
  
  const mouse = Mouse.create(canvas.elt);
  
  const options  = {
    mouse: mouse
  }
  
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function keyPressed() {
  if (key == ' ') { 
    World.remove(world, bird.body);
    bird = new Bird(150, 300, 15);
    slingshot.attach(bird.body);
  }
}

function mouseReleased() {
  setTimeout(() => {
   slingshot.fly();
  }, 20);
} 

function draw() {
  Matter.Engine.update(engine);
  background(0);
  ground.show();
  
  for(let box of boxes) {
    box.show();
  }
  
  slingshot.show();
  bird.show();
  
}

