class Trash1
{ 
constructor(x,y,width,height)
{ 
var options= { isStatic:true}
// this.dw=200
// this.dh=200
// this.t=20
this.body=Bodies.rectangle(x,y,width,height,options); 
// this.leftbody=Bodies.rectangle(x,y,this.dw,this.t,options); 
this.width=width; 
this.height=height; 
this.image=loadImage("dustbingreen.png");
World.add(world,this.body); 
} 
display() 
{ 
var angle = this.body.angle
image(this.image,800,190,200,200)
push();
translate(this.body.position.x,this.body.position.y)
stroke("lightblue")
fill("lightblue")
rotate(angle)
rectMode(CENTER);
rect(0,0,this.width,this.height)
pop()
} 
}