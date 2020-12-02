class Bob{
    constructor(x, y, radius){
        var bob_options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, bob_options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        //noStroke();
        fill("green");
        ellipse(0, 0,  this.radius, this.radius);
        pop();

    }
}
