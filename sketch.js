const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

var launcherObject;
var launchForce=100;
var fondo,P1,P2;
var Lobo,limg;


function preload(){
	 boy=loadImage("boy.png");
   limg=loadImage("lobo.png");
   cimg=loadImage("c2.png");
   a1=loadImage("angel1.png");
   a2=loadImage("angel2.png");
   f1=loadImage("flecha1.png");
   f2=loadImage("flecha2.png");
   p1=loadImage("pareja1.png");
   p2=loadImage("pareja2.png");
   p3=loadImage("pareja3.png");
   Pimg=loadImage("posicion.png");
   P2img=loadImage("posiones.png");
   P3img=loadImage("pocion2.png");
   Fondo=loadImage("fondo.jpg");
   f4img=loadImage("fuego.png");
   T1=loadImage("texto.png");
   T2=loadImage("texto1.png");
   T3=loadImage("texto2.png");
   T4=loadImage("texto3.png");
   T5=loadImage("texto4.png");
  }

function setup() {
	createCanvas(2100, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,40); 

	mango1=new mango(1100,130,40);
  mango2=new mango(1210,170,40);
	mango3=new mango(1000,210,40);
	mango4=new mango(980,100,35);
	mango5=new mango(1100,130,100);
	mango6=new mango(1000,320,45);
	mango7=new mango(850,280,40);
	mango8=new mango(1120,250,35);
	mango9=new mango(1120,350,40);
	mango10=new mango(1250,300,40);
	mango11=new mango(1130,60,30);
	mango12=new mango(900,160,40);

  c4=createSprite(1450,200,40,40);
  c4.addImage(cimg);
  c4.scale=0.17;

  Fuego=createSprite(1450,200,40,40);
  Fuego.addImage(f4img);
  Fuego.scale=0.3;
  Fuego.visible=false;

  Lobo=createSprite(1450,200,40,40);
  Lobo.addImage(limg);
  Lobo.scale=0.5;

  Flecha=createSprite(670,150,40,40);
  Flecha.addImage(f1);
  Flecha.scale=0.4;
  Flecha.visible=false;

  Flecha2=createSprite(100,90,40,40);
  Flecha2.addImage(f2);
  Flecha2.scale=0.4;
  Flecha2.visible=false;

  Angel=createSprite(100,140,40,40);
  Angel.addImage(a1);
  Angel.scale=0.5;
  Angel.visible=false;

  Angel2=createSprite(600,200,40,40);
  Angel2.addImage(a2);
  Angel2.scale=0.5;
  Angel2.visible=false;

  Pareja=createSprite(1860,300,40,40);
  Pareja.addImage(p1);
  Pareja.scale=0.9;

  P2=createSprite(600,480);
  P2.addImage(P2img);
  P2.scale=0.5;

  P1=createSprite(701,500);
  P1.addImage(Pimg);
  P1.scale=0.22;

  P3=createSprite(605,500,40);
  P3.addImage(P3img);
  P3.scale=0.16,

  t2=createSprite(800,900);
  t2.addImage(T2);
  t2.scale=0.5;

  t3=createSprite(800,700);
  t3.addImage(T3);
  t3.scale=0.4;
  t3.visible=false;

  t4=createSprite(1400,570);
  t4.addImage(T4);
  t4.scale=0.5;
  t4.visible=false;

  t5=createSprite(800,300);
  t5.addImage(T5);
  t5.scale=0.5;
  t5.visible=false;


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  launcherObject=new launcher (stoneObj.body,{x:235,y:420})

  C3Body=Bodies.rectangle(1450,200,40,40,{isStatic:true});
  World.add(world, C3Body);

	Engine.run(engine);
}

function draw() {

  background(Fondo);

  textSize(25);
  fill("black");
  text("¡Presiona Barra Espaciadora para tener una segunda Oportunidad para Jugar!",20 ,50);
  image(boy ,200,200,200,450);

  c4.x=C3Body.position.x;
  c4.y=C3Body.position.y;

  t2.velocityY=-1;

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stoneObj.display();
  groundObject.display();
  launcherObject.display();


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);


  if(P3.isTouching(c4)){
    Matter.Body.setStatic(C3Body,false);
    P3.destroy();
  }

  if(c4.y>300){
     Flecha.velocityX=6;
     Flecha.visible=true;
     Angel2.visible=true;
     
  }

  if(Flecha.isTouching(Pareja)){
    Flecha.destroy();
    Pareja.addImage("pareja",p2);
    Pareja.changeImage("pareja");
    Angel.visible=true;
    t3.visible=true;
    t3.velocityY=-2;
  }
  if(mousePressedOver(P1)){
    P1.x=mouseX;
    P1.y=mouseY;
  }

  if(mousePressedOver(P3)){
    P3.x=mouseX;
    P3.y=mouseY;
  }

  if(P1.isTouching(Angel)){
    Flecha2.visible=true;
    Flecha2.velocityX=7;
    P1.destroy();
  }

  if(Flecha2.isTouching(Angel2)){
    Angel2.visible=false;
  }

  
  if(Flecha2.isTouching(Pareja)){
    Pareja.addImage("pareja2",p3);
    Pareja.changeImage("pareja2");
    Flecha2.destroy();
    Angel2.visible=true;
    Angel2.velocityX=5;
    t4.visible=true;
  }

  if(keyDown("l")){
    Lobo.scale=0.6;
    Fuego.velocityX=-7;
    Fuego.visible=true;
  }
  if(Angel2.isTouching(Pareja)){
    Pareja.addImage("pareja",p2);
    Pareja.changeImage("pareja");
    Angel2.destroy();
  }

  if(Fuego.isTouching(Angel2)){
    Angel2.destroy();
    Fuego.destroy();
    t5.visible=true;
    t4.destroy();
  }
  keyPressed ();
  drawSprites();


}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
  
}
function mouseReleased(){
  launcherObject.fly();
}

function keyPressed (){
 if(keyDown("space")){
   Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
   launcherObject.attach(stoneObj.body);
 }
}


  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
