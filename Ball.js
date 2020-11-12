  
class Ball{
    constructor(x,y,radius){
        var options={
            friction: 0.4,
            density: 0.02
        }
        this.radius = radius
        this.x=x;
        this.y=y;
        this.image= loadImage("Poligone.png");
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
     }
     display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 40,40);
        pop();
     }
    }