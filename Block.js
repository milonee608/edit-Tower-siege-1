class Block {
    constructor(x, y, width, height){
      //super(x,y,width,height);
     // this.image = loadImage("sprites/wood1.png");    
        var options = {
            'restitution':0.2,
            'friction':1.0,
            'density':1.0
        }       
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;        
        World.add(world, this.body);
      }
     display(){
        //var angle = this.body.angle;
        //push();
        rectMode(CENTER);

        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        // translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        // pop();
      }
    }
  
 
  