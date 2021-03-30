/*class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("polygon.png");
  
    }
  
    display() {
      super.display();
    }
}*/
class Stone{
    constructor(x,y){
var options = {
    isStatic : false
 }
 this.body = Bodies.rectangle(x, y, 50, 50, options);
 this.width = 50;
 this.height = 50;
 this.image = loadImage("polygon.png");
 World.add(world, this.body);
}
display(){
 var angle = this.body.angle;
 push();
 translate(this.body.position.x, this.body.position.y);
 rotate(angle);
 imageMode(CENTER);
 image(this.image, 0, 0, this.width, this.height);
 pop();
}
}