class Iron{
	constructor(x,y)
	{
    
        var options={
            'restitution':0.8,
            'density':30,
            'friction':3
        }
		this.x=x;
		this.y=y;
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 150;
        this.height = 40;
		World.add(world, this.body);

	};
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			rect(0, 0, this.width, this.height);
			

			pop()
	};

};