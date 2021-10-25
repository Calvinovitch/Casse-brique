// ==============================================
// == JEU =======================================
// ==============================================

class classJeu
{
	constructor()
	{
		this.name        = "jeu"; 

		this.niveau      = 0;
		this.temps       = 0;
		this.score       = 0;
		this.vies        = 3;
		this.difficultes = 0;

		this.demoMode    = true;
	}

	start()
	{
		console.log("jeu.start()");

  		this.arene          = new classArene();
        this.arene.parent   = this;
        this.arene.createElement();
        this.arene.open();

		this.arene.mur.loadLevel(this.niveau);
		this.arene.mur.createWall();
		this.arene.batte.createElement();
		this.arene.balles[0].createElement(0);
		// this.arene.balles[1].createElement(1);
		// this.arene.balles[2].createElement(2);

		// this.arene.balles[0].go();
		// this.arene.balles[1].go();
		// this.arene.balles[2].go();
		this.demoStart();
	

	}

	quit()
	{
		console.log("jeu.start()");
		document.location.href = "https://www.google.fr/";
	}

	newGame()
	{
		this.demoMode = false;
		
		this.arene.balles.forEach(balle => {balle.stop()});
		this.arene.batte.stop();
		
		this.arene.batte.startListenMouse();

		this.catched = true;
		this.arene.balles[0].moveTo(jeu.arene.batte.x1 + 40, 453 );
		this.arene.balles[0].go();

		this.arene.mur.loadLevel(this.niveau);
		this.arene.mur.createWall();
		this.countDown();
		

		
	}

	demoStart()
	{
		this.catched = false;
		jeu.arene.balles[0].go();
		jeu.arene.batte.go();
	}

	countDown()
	{
		let count = document.createElement("div");
		count.id = "msg";
		document.getElementById("arene").appendChild(count);
		document.getElementById("msg").innerHTML = "3";
		
		setTimeout("document.getElementById('msg').innerHTML = '2'", 1000);
		setTimeout("document.getElementById('msg').innerHTML = '1'", 2000);
		setTimeout("document.getElementById('msg').innerHTML = 'GO'", 3000);
		setTimeout("document.getElementById('msg').innerHTML = ''", 4000);
		

	}
}