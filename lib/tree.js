function drawTrees()
{
	push()

  for (var i = 0; i < trees_x.length; i++) {
    var x = trees_x[i]
    fill(150,75,0);
    rect(x, floorPos_y - 80, 20, 80);
    fill(0,100,0);
    ellipse(x + 10, floorPos_y - 124, 120, 100)
  }

	pop()
}
