class Stone{
	constructor(x,y)
	{
	var options={
        'restitution':0.8,
        'density':12,
        'friction':0.8
    }
		this.x=x;
        this.y=y;
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 150;
        this.height = 40;

		World.add(world, this.body);

	}
	display(){
			var Stonepos=this.body.position;		
			push();
			translate(Stonepos.x, Stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0, 0, this.width, this.height);

			pop();
	};

};