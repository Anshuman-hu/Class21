var fr,mr;
var ob1,ob2;
function setup() {
  createCanvas(800,400);
   fr=createSprite(400, 200, 50, 50);
   mr=createSprite(400,400,60,50);
fr.velocityY= +5;
mr.velocityY= -5;
   ob1=createSprite(600,600,30,40);
   ob2=createSprite(200,250,50,20);

   ob1.shapeColor="pink";
   ob2.shapeColor="yellow";

  fr.shapeColor="Green";
  mr.shapeColor="Green";
  
}

function draw() {
  background(255,255,255);
  //mr.x=World.mouseX;
  //mr.y=World.mouseY;

  //ob1.x=World.mouseX;
  //ob1.y=World.mouseY;


  //console.log(movingrect.x-fixedrect.x);
  //console.log(fixedrect.width/2+movingrect.width/2);

  bounceOff(fr,mr);

  

  drawSprites();
}

/*function bounceOff(fixedrect,movingrect){
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2)
  
  {
    fixedrect.velocityX*=(-1);
    movingrect.velocityX*=(-1);
  }  
  if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){

      fixedrect.velocityY*=(-1);
    movingrect.velocityY*=(-1);
    }
}*/