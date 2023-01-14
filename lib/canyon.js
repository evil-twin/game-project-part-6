
function drawCanyons() {
  for (var i = 0; i < canyons.length; i++) {
    var canyon = canyons[i];

    //draw the canyon
    drawCanyon(canyon.x_pos, canyon.width);

    //canyon interaction
    if (
      gameChar_y > floorPos_y &&
      gameChar_x > canyon.x_pos &&
      gameChar_x < canyon.x_pos + canyon.width
    ) {
      isPlummeting = true;
    }
  }
}

function drawCanyon(x, canyon_width)
{
  push()
  background
  fill(100, 155, 255);
    
  rect(x, floorPos_y, canyon_width, floorPos_y);
  
  // rocks
  fill(100, 50, 0);
  rect(x, height - 10, canyon_width, 10);
  triangle(
    x, height - 36,
    x + 20, height,
    x, height
  )
  triangle(
    x + canyon_width, height - 36,
    x + canyon_width - 20, height,
    x + canyon_width, height
  )
  rect(x, floorPos_y, 3, floorPos_y);
  rect(x + canyon_width - 3, floorPos_y, 3, floorPos_y);
  pop()
}
