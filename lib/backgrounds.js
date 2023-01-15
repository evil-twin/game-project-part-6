function drawScene()
{
  background(100, 155, 255); //fill the sky blue
  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
}

function drawGameOver()
{
  push()
  background(0,150);
  fill(255)
  text('GAME OVER, press space to continue.', gameChar_x - 100, height / 2);
  pop()
}

function drawLevelComplete()
{
  push()
  background(255,150);
  fill(0)
  text('Level complete. Press space to continue.', gameChar_x - 400, height / 2);
  pop()
}
