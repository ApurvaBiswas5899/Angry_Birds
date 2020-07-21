class Bird {
  constructor(x, y, r) {
    this.body = Matter.Bodies.circle(x, y, r);
    Matter.World.add(world, this.body);
    this.r = r; 
  }

  show(){
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    imageMode(CENTER);
    let choose = Math.floor(Math.random() * 10);  
    if(choose % 5 == 0) {
      image(pinkImg, 0, 0, this.r * 2, this.r * 2);
    }
    if(choose % 5 == 1) {
      image(redImg, 0, 0, this.r * 2, this.r * 2);
    }
    if(choose % 5 == 2) {
      image(whiteImg, 0, 0, this.r * 2, this.r * 2);
    }
    if(choose % 5 == 3) {
      image(yellowImg, 0, 0, this.r * 2, this.r * 2);
    }
    if(choose % 5 == 4) {
      image(blueImg, 0, 0, this.r * 2, this.r * 2);
    }
    pop();
  }
}