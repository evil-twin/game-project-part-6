function drawMountains()
{
  var y = floorPos_y

  push()
  fill(100);

  for (var i = 0; i < mountains.length; i++) {
    var x = mountains[i].x
    var scaleFactor = mountains[i].size / 5

    triangle(
      x,y,
      x + 150 * scaleFactor , y - 182 * scaleFactor,
      x + 300 * scaleFactor, y
    );
    triangle(
      x - 50, y, 
      x + 50 * scaleFactor, y - 102 * scaleFactor,
      x + 250 * scaleFactor, y
    );
    triangle(
      x - 50, y,
      x + 200 * scaleFactor, y - 152 * scaleFactor,
      x + 350 * scaleFactor, y
    )
    triangle(
        x - 50, y,
        x + 300 * scaleFactor, y - 72 * scaleFactor,
        x + 410 * scaleFactor, y
    );
  }

  pop()
}