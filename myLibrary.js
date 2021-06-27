//Parameters to function
function isTouching(box1,box2){
    if (box1.x - box2.x < box2.width/2 + box1.width/2
      && box2.x - box1.x < box2.width/2 + box1.width/2
      && box1.y - box2.y < box2.height/2 + box1.height/2
      && box2.y - box1.y < box2.height/2 + box1.height/2) {
        //True-yes ; false-no - Boolean Values
        return true;
    }
    else {
      return false;
    }
  }


  function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    } 
  }

