class Block extends BaseClass
 {
  constructor(x, y, width, height)
  {
    super(x,y,width,height);
    this.block = Bodies.rectangle(this.x,this.y,this.width,this.height)
  }

};
