class Paper{
constructor(x,y,r){
var options={
density:0.7,
restitution:0.8

}
this.radius=r;
this.body=Bodies.circle(x,y,r,options);
World.add(world,this.body)
}
display(){
    var pos=this.body.position;
    push ();
    translate(pos.x,pos.y);
   
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius)
    pop ();
}
}