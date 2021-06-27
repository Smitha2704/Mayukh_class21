var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(100,300, 50,50);
  object2=createSprite(300, 300, 50,50);
  object1.shapeColor="green";
  object2.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //passing arguments to function
  if(isTouching(movingRect,object1)){
    movingRect.shapeColor="red";
    object1.shapeColor="red";
  }else{
    movingRect.shapeColor="purple";
    object1.shapeColor="purple";
  }

  
  drawSprites();
}

