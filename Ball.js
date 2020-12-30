class Ball{
  constructor(){
      var options ={
          isStatic:false,
          density: 1.0

      }
    this.body = Bodies.circle(200,100,20,options);
    World.add(world, this.body);  
  }
   display(){
       var pos = this.body.position;
       ellipseMode(RADIUS);
       ellipse(pos.x,pos.y, 20, 20);
   }
}