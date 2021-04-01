class Bob {
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("paper.png")

        this.body = Bodies.circle(this.x, this.y, this.radius, options)
        World.add(world, this.body)
    }

    display(){
        var bobPos = this.body.position

        push()
        translate(bobPos.x, bobPos.y)
        rectMode(CENTER)
        strokeWeight(2)
        fill("orange")
        ellipse(0,0,this.radius,this.radius)
        imageMode(CENTER);
        image(this.image, 0, 0, 2*this.radius, 2*this.radius);
        pop()
    }
}