function renderFlagpole() 
{
  poleWidth = 6;

  push();
  fill(255);
  rect(flagpole.x_pos, floorPos_y - 200, poleWidth, 200);
  fill(255, 0, 0);
  
  var flagPosition = floorPos_y - 40
  if (flagpole.isReached)
  {
    flagPosition = floorPos_y - 200
  }

  triangle(
    flagpole.x_pos + poleWidth, flagPosition,
    flagpole.x_pos + poleWidth + 40, flagPosition + 20,
    flagpole.x_pos + poleWidth, flagPosition + 40);
}

function checkFlagpole()
{
  var flagDistance = abs(flagpole.x_pos - gameChar_x)
  if (flagDistance <= 20)
  {
    flagpole.isReached = true
  }
}