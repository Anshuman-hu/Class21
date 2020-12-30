function bounceOff(fixedrect,movingrect){
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
  }