//============================
//== BATTE ===================
//============================



class classBatte
{
	name; 
	isMoving;
	w;
	y;
	x1;
	x2;
	ox;

    constructor()
    {
        this.name = "batte";

        this.isMoving = false;

        this.w = 80;
        this.y = 460;

        this.x1 = 0;
        this.x2 = this.x1 + this.w;
        this.ox = this.x1;
    }

    createElement()
    {
        console.log("jeu.arene.batte.createElement()");
        let batte = document.createElement("div");
        batte.id = "batte";
        batte.className ="batte";
		batte.style.position = "absolute";
		batte.style.top = this.y + "px";
		batte.style.left = this.x1 + "px";
        document.getElementById("arene").appendChild(batte);
    }

	startListenMouse()
    {
        let bcr = parseInt(document.getElementById("arene").getBoundingClientRect().left);
		document.onmousemove = function (e) 
		{ 
			jeu.arene.batte.x1 = e.clientX- bcr - 40;
			jeu.arene.batte.move();
		}
		document.onclick = () => {
			jeu.arene.balles[0].catched = false;
			console.log("onclick");
		}
    }

	move()
	{

		//== Collision balle + batte ===============

		// console.log("jeu.arene.batte.move()");

		if(jeu.demoMode == true)
		{
			this.x1 = jeu.arene.balles[0].x - 40 ;
			
		}

		// console.log("jeu.arene.batte.move()");
		
		if(this.x1 < 0)
		{
			this.x1 = 0;
		}
		if(this.x1 > 520 - this.w)
		{
			this.x1 = 520 - this.w;
		}

			
	    
		this.x2 = this.x1 + this.w;
		document.getElementById("batte").style.left = this.x1 + "px";		
		
	}

	

	go()
	{
		console.log("jeu.arene.batte.go()");
		this.run = setInterval("jeu.arene.batte.move();",10);
	}

	stop()
	{
		if(this.run != null && this.run != undefined )
		{
			clearInterval(this.run);
		}
	}
}