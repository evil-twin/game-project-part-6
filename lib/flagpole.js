function renderFlagpole() 
{
  poleWidth = 6;

  push();
  fill(255);
  rect(flagpole.x_pos, floorPos_y - 200, poleWidth, 200);
  fill(255, 0, 0);
  
  if (flagpole.isArrived & flagpole.flag_y >= floorPos_y - 196)
  {
    flagpole.flag_y -= 4
  }

  if (flagpole.flag_y <= floorPos_y - 200)
  {
    flagpole.isReached = true
  }

  var x = flagpole.x_pos
  var y = flagpole.flag_y

  triangle(
    x + poleWidth, y,
    x + poleWidth + 40, y + 20,
    x + poleWidth, y + 40);
}

function checkFlagpole()
{
  var flagDistance = abs(flagpole.x_pos - gameChar_x)
  if (flagDistance <= 20)
  {
    flagpole.isArrived = true
  }
}