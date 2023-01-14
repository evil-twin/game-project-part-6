function drawScoreBoard()
{
  push()
  noStroke()
  fill(0,0,0,50)
  rect(20, 10, 82, 30)
  fill(255);
  text('SCORE:  ' + game_score, 30, 30);
  pop()
}
