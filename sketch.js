const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var ball;
var slingshot;

var gamestate = "playing";



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700, 350);
    box2 = new Box(700, 300);
    box3 = new Box(700, 250);
    box4 = new Box(700,200);
    box5 = new Box(700,150);

    box6 = new Box(750, 350);
    box7 = new Box(750, 300);
    box8 = new Box(750, 250);
    box9 = new Box(750, 200);
    box10 = new Box(750, 150);

    box11 = new Box(800, 350);
    box12 = new Box(800, 300);
    box13= new Box(800, 250);
    box14= new Box(800, 200);
    box15 = new Box(800, 150);

    ground = new Ground(600,height,1200,20)

    ball = new Ball();

    slingshot = new SlingShot(ball.body,{x: 600,y:50} );
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display()
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    ball.display();

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX,y:mouseY})
}
