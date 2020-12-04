class Box{

constructor(x,y,width,height){

      var options={
            restitution: 1
      }
  this.height = height;
  this.width = width;
 this.body = Bodies.rectangle(x,y,width,height,options);
 World.add(world,this.body);

}

displayBox(){

      var pos = this.body.position;
      rectMode(CENTER); // to place the x,y positions of rect to center
      rect(pos.x,pos.y,this.width,this.height); // rect(x,y,width,height)
}


}