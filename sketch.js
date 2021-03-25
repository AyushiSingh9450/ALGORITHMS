var moving, fixed;
var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(600,600);
  moving = createSprite(100, 300, 40, 60);
  moving.velocityX = 3;

  fixed = createSprite(300, 300, 60, 60);

  rect1 = createSprite(100, 200, 50, 50);
  rect2 = createSprite(200, 200, 50, 50);
  rect3 = createSprite(300, 200, 50, 50);
  rect4 = createSprite(400, 200, 50, 50);

  moving.shapeColor = "red";
  fixed.shapeColor = "white";
}

function draw() {
  background(0);  

  // moving.x = mouseX;
  // moving.y = mouseY;

  // arguments
  if(isTouching(moving, fixed))  {
    moving.shapeColor = "blue";
    fixed.shapeColor = "green";
  } else  {
    moving.shapeColor = "red";
    fixed.shapeColor = "white";
  }

  if(isTouching(moving, rect1))  {
    moving.shapeColor = "orange";
    rect1.shapeColor = "orange";
  } else  {
    moving.shapeColor = "red";
    rect1.shapeColor = "yellow";
  }

  if(isTouching(moving, rect2))  {
    moving.shapeColor = "orange";
    rect2.shapeColor = "orange";
  } else  {
    moving.shapeColor = "red";
    rect2.shapeColor = "yellow";
  }

  if(isTouching(moving, rect3))  {
    moving.shapeColor = "orange";
    rect3.shapeColor = "orange";
  } else  {
    moving.shapeColor = "red";
    rect3.shapeColor = "yellow";
  }

  if(isTouching(moving, rect4))  {
    moving.shapeColor = "orange";
    rect4.shapeColor = "orange";
  } else  {
    moving.shapeColor = "red";
    rect4.shapeColor = "yellow";
  }

  bounceoff(moving,fixed);

  drawSprites();
}

