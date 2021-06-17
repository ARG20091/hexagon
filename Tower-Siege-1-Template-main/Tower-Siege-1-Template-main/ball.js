class Ball{
    constructor(x, y, width, height){

    
    var options = {
 restitution: 1,
 density: .8, 
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("polygon.png")
    World.add(world, this.body); 
    }
    display(){
        push();
        imageMode(CENTER)
        rect(0,0,this.width, this.height);
        pop();
}
}