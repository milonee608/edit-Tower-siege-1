
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var block1,block2,block3,block4,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var ground1,ground2;
var polygon,chain;

function preload()
{
	poly=loadImage("Sprites/pentagon.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  //polygon=Bodies.polygon(200,200,6,5);
  //World.add(world,polygon);

  
	ground1=new Ground(390,310,200,10);
  ground2=new Ground(600,530,250,10);
  
	 block1=new Block(330,235,30,40);
	 block2=new Block(360,235,30,40);
	 block3=new Block(390,235,30,40);
	 block4=new Block(420,235,30,40);
	 block5=new Block(450,235,30,40);

	 block6=new Block(360,195,30,40);
	 block7=new Block(390,195,30,40);
	 block8=new Block(420,195,30,40);

	 block9=new Block(390,255,30,40);
	 
	 block12=new Block(510,500,30,40);
	 block10=new Block(540,500,30,40);
	 block11=new Block(570,500,30,40);
	 block13=new Block(600,500,30,40);
	 block14=new Block(630,500,30,40);
	 block15=new Block(660,500,30,40);

	 block16=new Block(525,400,30,40);
	 block17=new Block(555,400,30,40);
	 block18=new Block(585,400,30,40);
	 block19=new Block(615,400,30,40);
	 block20=new Block(645,400,30,40);

	 block21=new Block(540,370,30,40);
	 block22=new Block(570,370,30,40);
	 block23=new Block(600,370,30,40);
	 block24=new Block(630,370,30,40);

	 block25=new Block(555,270,30,40);
	 block26=new Block(585,270,30,40);
	 block27=new Block(610,270,30,40);

	 block28=new Block(570,170,30,40);
	 block29=new Block(600,170,30,40);

	 block30=new Block(585,100,30,40);
	 
   chain=new SlingShot(poly.body,{x:200,y:190});
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  image(poly.body,200,190)

  chain.display();

  fill("orange");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("white");
  block6.display();
  block7.display();
  block8.display();

  fill("green");
  block9.display();

  fill("green");
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  fill("white");
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();

  fill("orange");
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  fill("white");
  block25.display();
  block26.display();
  block27.display();

  fill("blue");
  block28.display();
  block29.display();

  fill("yellow");
  block30.display();


  ground1.display();
  ground2.display();

  drawSprites();
 
}
function mouseDragged(){
  Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}



