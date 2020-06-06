class Ball {
    constructor(x,y,radius){
   
       var box_options ={
                   restitution:1
                   
               }
           this.body=Bodies.circle(x,y,radius,box_options)
           this.width=width;
           this.height=height;
           World.add(world,this.body);

    }
    
    display(){
          var pos=this.body.position;
          fill("red");
          ellipseMode(RADIUS);
          ellipse (pos.x,pos.y,this.radius,this.radius);
       }}