class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: ball.body,
            pointB: pointB,
            stiffness: 0.04,
            length: 250
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   

    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("white");
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y)
                
           
            
            pop();
        }
    }
}