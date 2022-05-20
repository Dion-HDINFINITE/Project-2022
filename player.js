class Player {
    constructor() {
      this.pos = {x:0, y:0};
      this.size = {w:10, h:50};
      this.points = 0;
      this.controller = 'cpu';
      this.direction = 1;
    }
    
    update() {
      if(this.controller === 'mouse'){
        this.pos.y = mouseY;
      } else if(this.controller === 'cpu'){
        const mediaYBall = (ball.pos.y + (ball.size.h/2));
        const mediaYPlayer = (this.pos.y + (this.size.h/2));
        if(mediaYBall > mediaYPlayer) {
          this.direction = 1
        } else {
          this.direction = -1;
        }
        this.pos.y += (ball.speed * random(0.9,0.97)) * this.direction;
      }
    }
    
    show() {
      noStroke();
      fill('white');
      rect(this.pos.x, this.pos.y, this.size.w, this.size.h);
    }
  }
