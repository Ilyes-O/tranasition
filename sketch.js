const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var engine, world
var brd1, brd2
var block1 = [],block1 = [];

var score = 0;
var score2 = 0

var stand1, stand2

function preload() {
  bg = loadImage("images/bg.png")
}
function setup() {
  engine = Engine.create();
  world = engine.world
  canvas = createCanvas(1800, 800);

  brd1 = new Brd1(400,460,60,60);
  brd2 = new Brd2(1300,460,60,60);

  sling1 = new Slingshot1({x:400,y:510}, brd1.body)
  sling2 = new Slingshot2({x:1300,y:510}, brd2.body)

  for (var j = 120; j <=350; j=j+40) { 
    block1.push(new Block1(j,650));
  }

  for (var j = 120; j <=350; j=j+40) { 
    block1.push(new Block1(j,600));
  }
  for (var j = 120; j <=350; j=j+40) { 
    block1.push(new Block1(j,550));
  }

  for (var j = 1360; j <=1599; j=j+40) { 
    block1.push(new Block1(j,650));
  }

   for (var j = 1360; j <=1599; j=j+40) { 
    block1.push(new Block1(j,600));
  }

  for (var j = 1360; j <=1599; j=j+40) { 
    block1.push(new Block1(j,550));
  }

  /*for (var j = 1200; j <=1400; j=j+40) { 
    block1.push(new Block1(j,330));
  }*/

  stand1 = new Stand(230,700,250,10);
  stand2 = new Stand(1470,700,250,10);
  //stand3 = new Stand(880,120,250,10)


  score =0
  score2 = 0;
}


function draw() {
  background(bg)
  Engine.update(engine);

  brd1.display();
  brd2.display();

  stand1.display();
  stand2.display();
  //stand3.display();

  
  for (var i = 0; i < block1.length; i++) {
    block1[i].display();   
  }

  for (var i = 0; i < block1.length; i++) {
    block1[i].display();   
  }

  drawSprites();
  fill("black")
  textSize(17)
  text("Player 1 score:" +score,800,50)

  fill("black")
  textSize(17)
  text("Player 2 score:" +score2,800,100)
}

function mouseDragged(){
  Matter.Body.setPosition(brd1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling1.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(brd1.body, {x:400, y:400})
    sling1.attach(brd1.body)
  }
}

