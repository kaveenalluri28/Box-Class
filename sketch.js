//namespacing

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;

var box1,box2;

function setup() {

 var canvas = createCanvas(800,800);

 engine = Engine.create();
 world = engine.world;

box1 = new Box(300,300,50,100);
box2 = new Box(500,300,20,40);

}

function draw() {

  background(0);  
  Engine.update(engine);

  box1.displayBox();
  box2.displayBox();
 
}