class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var rope_options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y: this.offsetY},
            stiffiness: 0.05,
            length: 350
        }
        this.rope = Constraint.create(rope_options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}