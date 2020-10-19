class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       // this.sling1=loadImage("sprites/sling1.png");
        //this.sling2=loadImage("sprites/sling2.png");
        //this.sling3=loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
       this.chain.bodyA = null;
    }

    display(){

      line(this.chain.bodyA.position.x ,this.chain.bodyA.position.y,this.pointB.position.x,this.pointB.position.y);
       
    }
    
}