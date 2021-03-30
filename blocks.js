
class Block{
    constructor(x,y){
var options = {
    isStatic : false
 }
 this.body = Bodies.rectangle(x, y, 30, 30, options);
 this.width = 30;
 this.height = 30;
 this.image = loadImage("block.JPG");
 this.Visiblity = 255;
 World.add(world, this.body);
}
display(){
  if(this.body.speed < 6){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 30, 30);
         pop();
       }
 
   }
  }