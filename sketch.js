var fixedrect,movingrect,gameObject1,gameObject2


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 80);
  movingrect = createSprite(400,200,80,50);
  gameObject1 = createSprite(400,100,50,50);
  gameObject2 = createSprite(600,100,50,50);

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject1.shapeColor = "green";
}

function draw() {
  background(0); 
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY; 
  
  if(isTouching(movingrect,gameObject1)){
    gameObject1.shapeColor = "cyan";
    movingrect.shapeColor = "cyan";

  }
  else{
    gameObject1.shapeColor = "green";
    movingrect.shapeColor = "green";
  }

  if(isTouching(movingrect,gameObject2)){
    gameObject2.shapeColor = "white"
    movingrect.shapeColor = "white"

  }
  else{
    gameObject2.shapeColor = "green"
    movingrect.shapeColor = "green"

  }
  if(isTouching(movingrect,fixedrect)){
    fixedrect.shapeColor = "pink"
    movingrect.shapeColor = "pink"

  }
  else{
    fixedrect.shapeColor = "green"
    movingrect.shapeColor = "green"
  }
  drawSprites();

  
}

function isTouching(Object1,Object2){

  if(Object1.x - Object2.x <= Object1.width/2 +  Object2.width/2
    && Object2.x - Object1.x <= Object1.width/2 + Object2.width/2
    && Object2.y - Object1.y <= Object1.height/2 + Object2.height/2
    && Object1.y - Object2.y <= Object1.height/2 + Object2.height/2 ){
      return true;

  }
  else {
    return false;
  }




}


