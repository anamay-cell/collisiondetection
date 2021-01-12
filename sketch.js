var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 50);
  fixedrect.shapeColor='blue';
  fixedrect.debug=true;

  movingrect=createSprite(200, 200, 50, 30);
  movingrect.shapeColor='blue';
  movingrect.debug=true;
}

function draw() {
  background('black')  ;
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  //console.log(fixedrect.width/2+movingrect.width/2)

  if(movingrect.x - fixedrect.x < fixedrect.width/2+movingrect.width/2 
    && fixedrect.x-movingrect.x <fixedrect.width/2+movingrect.width/2 
   && movingrect.y - fixedrect.y < fixedrect.height/2+movingrect.height/2 
    && fixedrect.y-movingrect.y <fixedrect.height/2+movingrect.height/2
    ) {
    fixedrect.shapeColor='red';
    movingrect.shapeColor='red';
  }
  else{
    fixedrect.shapeColor='blue';
    movingrect.shapeColor='blue';
  }
  drawSprites();
}