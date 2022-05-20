const player1 = new Player();
player1.controller = 'mouse';
const player2 = new Player();
const ball = new Ball();

function setup() {
  createCanvas(500, 400);
  resetGame();
}

function resetGame(){
  player1.pos.x = 10;
  player2.pos.x = width - 20;
  player1.pos.y = 180;
  player2.pos.y = 180;
  ball.pos.x = (ball.direction === 1) ? 40 : 400;
  ball.pos.y = 200;
  ball.speed = 3;
}

function checkscore(){
  if(ball.pos.x > width){
    console.log('player 1 made the point');
    player1.points++;
    resetGame();
  }
  
  if(ball.pos.x + ball.size.w < 0){
    player2.points++;
    resetGame()
  }
}

function showScore() {
  fill('pink');
  textSize(48);
  text(player1.points,190,50);
  text(player2.points,284,50);
}

function ObjectCollisions(obj1, obj2) {
  if(
      (
      obj1.pos.x + obj1.size.w > obj2.pos.x 
       && 
      obj1.pos.x < obj2.pos.x + obj2.size.w
      )
    &&
      (
      obj1.pos.y + obj1.size.h > obj2.pos.y
        &&
      obj1.pos.y < obj2.pos.y + obj2.size.h
      )
  ){
    return true;  
  }
  return false;
}

function checkCollision(){
  if(ObjectCollisions(ball, player2)){
    ball.direction = -1;
    ball.speed += 0.1;
  }
  
  if(ObjectCollisions(ball, player1)){
    ball.direction = 1;
    ball.speed += 0.1;
  }
  
  if((ball.pos.y + ball.size.h) > height){
    ball.directionVertical = -1;
  }
  
  if(ball.pos.y < 0){
    ball.directionVertical = 1;
  }
}

function draw() {
  background("black");
  strokeWeight(5);
  stroke("white");
  line(width / 2, 0, width / 2, height);

  player1.update();
  player2.update();
  ball.update();
  
  checkCollision();
  
  checkscore();

  player1.show();
  player2.show();
  ball.show();
  
  showScore();
}
