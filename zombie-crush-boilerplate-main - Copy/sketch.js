const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge
var wall,wall2
 var wall_con
 var zombie
 var background1
 var stones=[]
 function preload(){
zombie=loadImage("./assets/zombie.png") 
axe=loadImage("./assets/axe.png")
background1=loadImage("./assets/background.png")

 }
function setup() {
  createCanvas( 1454,720);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  rectMode(CENTER);
  ellipseMode(RADIUS)

  Zombie=createSprite(600,600,20,20)
Zombie.addImage("zombie",zombie)
Zombie.scale=0.2



wall=new base (1439,300,800,200, "#8d6e63", true)
wall2=new base (5,300,800,200, "#8d6e63", true)
  bridge= new Bridge (20,{ x:10,y:10}, "#8d6e63", true);
  ground= new base(754,700,1510,20, "#8d6e63", true)

  Matter.Composite.add(bridge.body, wall )
     wall1= new link (bridge,wall)

     axe = createImg( './assets/axe.png');
axe.position(900,300);
axe.size(50,50)
 
axe.mouseClicked(handleButtonPress);

    rectMode(CENTER);
  ellipseMode(RADIUS)

  for(var i=0;i<=8; i++){
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-100, 100);
    //var x=random(1200,500)
    //var y=random (-10,140)
  var  stone=new stone1(x,y,80,80)
  stones.push(stone)
}

}
function draw() {
  background(background1);
  drawSprites()
  Engine.update(engine);
  wall.show();
  wall2.show();
  bridge.show()
   ground.show();


  
//showStones(i,stones)
 
 
 for (var stone of stones) {
  stone.show();
}
}
//function showStones (index,stones){
  //stones[index].show();
  
function handleButtonPress (){
wall1.detach();
setTimeout(()=> 
{
  bridge.break();}
  ,1500);

}