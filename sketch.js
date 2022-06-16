const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;
var log1;
var log4;
var bird;

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(650,400,50,50);
    box2 = new Box(830,400,50,50);
    ground = new Ground(500,height,1000,20);
    log1 = new Log(740,360,230,PI/2);
    log4 = new Log(740,120,120,-PI/7);

    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    log4.display();
    bird.display();
}