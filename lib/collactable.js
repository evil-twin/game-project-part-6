function drawCollectables() {
  for (var i = 0; i < collectables.length; i++) {
    var collectable = collectables[i];

    //draw the collectable
    if (!collectable.isFound) {
      drawCollectable(collectable);
    }

    //collectable interaction
    if (
      dist(collectable.x_pos, collectable.y_pos, gameChar_x, gameChar_y) < 24
    ) {
      collectable.isFound = true;
    }
  }
}

function drawCollectable(t_collectable)
{
    var x = t_collectable.x_pos
    var y = t_collectable.y_pos
    
  var center = {
    x,
    y: y - 18, 
  }	

  push()

  fill(240,220,0);   
  ellipse(center.x, center.y, 20, 30)
  fill(255,255,0);   
  ellipse(center.x, center.y, 15 , 20);
  strokeWeight(3);
  stroke(240,220,0); 
  line(center.x - 8, center.y, center.x + 8, center.y);
  pop()
}

