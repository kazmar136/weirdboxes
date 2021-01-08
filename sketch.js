const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new ground(200,400,400,50)
    box1=new Box(200,200,100,60)
    box2=new Box(250,100,100,60)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    box1.display();
    box2.display();
    ground1.display();
   
}