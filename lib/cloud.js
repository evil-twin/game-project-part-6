function drawClouds() {
  var y = 100; // natural cloud position
  push();
  fill(255);

  for (var i = 0; i < clouds.length; i++) {
    var x = clouds[i].x;
    var size = clouds[i].size;

    ellipse(x, y, 20 * size, 20 * size);
    ellipse(x + 20 * size, y, 30 * size, 30 * size);
    ellipse(x + 35 * size, y, 20 * size, 20 * size);
    ellipse(x + 45 * size, y, 10 * size, 10 * size);
  }

  pop();
}