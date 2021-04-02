class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5            
        }
       // this.chain = loadImage('sprites/chain.png');
       
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
   
   show(){
        var pos1=this.chain.bodyA.position;
        var pos2=this.chain.bodyB.position
     
            //var pointA = this.chain.bodyA.position;
           // var pointB = this.chain.bodyB.position;
                stroke(0);
                strokeWeight(5);
                line(pos1.x , pos1.y, pos2.x , pos2.y);
               
    }
    
}