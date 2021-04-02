class Rock{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      
      this.width = width;
      this.height = height;
      this.image=loadImage("images/rock1.png");
      World.add(myWorld,this.body);
    }
    show()
    {
        var pos=this.body.position
        imageMode(CENTER);
        fill ('black');
        stroke ("grey");
        image(this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  