class Ball {
    constructor(){
      this.pos = {x:0, y:0};
      this.size = {w:10, h:10};
      this.direction = 1;
      this.directionVertical = 1; 
      this.speed = 1;
    }
    
    update(){
      this.pos.x += (this.speed * this.direction);
      this.pos.y += (this.speed * this.directionVertical);
    }
    
    show(){
      noStroke();
      fill('white');
      rect(this.pos.x, this.pos.y, this.size.w, this.size.h);
    }
  }
