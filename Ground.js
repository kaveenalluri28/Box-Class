class Ground{

 constructor(x,y,width,height){

    var  options = {
          isStatic:true
    }
this.height = height;
this.width = width;

    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
 }     
 displayGround(){

      var pos = this.body.position;
      rectMode(CENTER); // to place the x,y positions of rect to center
      fill(255);
      rect(pos.x,pos.y,this.width,this.height); // rect(x,y,width,height)
}

}