var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var collectables;
var canyons;
var trees_x;
var clouds;

var cameraPosX;
var game_score;
var flagpole;
var cameraLimits;

function setup() {
  createCanvas(1024, 576);

  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;
  gameChar_y = 260
  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;

  collectables = [
    { x_pos: 50, y_pos: floorPos_y, isFound: false },
    { x_pos: 800, y_pos: floorPos_y, isFound: false },
    { x_pos: 1300, y_pos: floorPos_y, isFound: false },
  ];
  canyons = [
    { x_pos: 650, width: 130 },
    { x_pos: 1500, width: 180 },
  ];
  trees_x = [0, 900, 1800];
  clouds = [
    { x: 100, size: 1 },
    { x: 300, size: 2 },
    { x: 800, size: 1 },
    { x: 1300, size: 3 },
    { x: 1800, size: 2 },
  ];
  mountains = [
    { x: 200, size: 4 },
    { x: 900, size: 5 },
    { x: 2000, size: 2 },
  ];

  cameraLimits = { left: 0, right: 2300 };
  flagpole = { isReached: false, x_pos: 2500 };
  cameraPosX = 0;
  game_score = 0;
}

function draw() {
  background(100, 155, 255); //fill the sky blue
  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

    // draw score board
  drawScoreBoard()
  
  // start camera motion
  push();
  translate(-cameraPosX, 0);

  // NOTE:
  // all draw functions and its coressponding loops/interactions
  // are modulerised in `/lib` directory

  // draw clouds
  drawClouds();

  // draw mountains
  drawMountains();

  // draw trees
  drawTrees();

  // draw canyons
  drawCanyons();

  // draw collectables
  drawCollectables();

  renderFlagpole()
  if (!flagpole.isReached)
  {
    checkFlagpole()
  }
  // draw game character
  drawCharecter()

  // end camera motion
  pop();
}

function keyPressed() {
  // disable movement when falilng into canyon
  if (isPlummeting)
  {
    return;
  }

  // turn left using `A` or `ArrowLeft`
  if (keyCode == 65 || keyCode == 37)
  {
    isLeft = true;
  }

  // turn right using `D` or `ArrowRight`
  if (keyCode == 68 || keyCode == 39)
  {
    isRight = true;
  }

  // jump using `W`, `ArrowUp` or `Space`
  if ((keyCode == 87 || keyCode == 32 || keyCode == 38) && !isFalling)
  {
    gameChar_y -= 150;
  }
}

function keyReleased()
{
  // disable movement when falilng into canyon
  if (isPlummeting) return;

  // relase `A` or `ArrowLeft` action
  if (keyCode == 65 || keyCode == 37) 
  {
    isLeft = false;
  }

  // relase `D` or `ArrowRight` action
  if (keyCode == 68 || keyCode == 39) 
  {
    isRight = false;
  }
}
