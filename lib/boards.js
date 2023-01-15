function drawScoreAndLivesBoard()
{
  push()
  noStroke()
  fill(0,0,0,50)
  rect(20, 10, 82, 45)
  fill(255);
  text('SCORE:  ' + game_score, 30, 30);
  text('LIVES:    ' + lives, 30, 45);
  pop()
}

function checkPlayerDie()
{
  isPlayerDead = (gameChar_y >= height);
  if (isPlayerDead)
  {
    if (lives > 1)
    {
      startGame();
      lives -= 1;
    } 
    else if (lives == 1) // end of the game
    {
      lives = 0;
    }
  }
}