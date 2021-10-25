//================================
//== ARENE =======================
//================================

class classArene
{
    constructor()
    {
        this.name = "arene";

        this.w = 0;
        this.h = 0;

        this.mur        = new classMur();
        this.batte      = new classBatte();
        this.balles     = new Array();
        this.balles[0]  = new classBalle(0);
        this.balles[1]  = new classBalle(1);
        this.balles[2]  = new classBalle(2);
         
        this.mur.parent       = this;
        this.batte.parent     = this;
        this.balles[0].parent = this;
        this.balles[1].parent = this;
        this.balles[2].parent = this;

       
    }

    createElement()
    {
        console.log("arene.createElement()");
        let div = document.createElement("div");
        div.id = "arene";   
        div.style.width = this.w;
        div.style.height = this.h;
        document.getElementById("logo").after(div);
        div.onclick =  jeu.arene.batte.startListenMouse();
    }

    open()
    {
        console.log ("arene.open()");
        btnStart.disable();
        btnQuit.disable();
        console.log(1);
        btnStart.set("NEW GAME", function(){jeu.newGame();});
        
        btnQuit.set("HOME", function(){jeu.arene.close(); });
        console.log(2);
        document.getElementById("arene").style.display = "block";
        console.log(3);
        setTimeout("document.getElementById('arene').style.width = '520px';", 1000);
        setTimeout("document.getElementById('arene').style.height = '520px';", 3000);
        
        setTimeout("document.getElementById('arene').style.top = '50px';", 3000);
        setTimeout("document.getElementById('logo').style.top = '-300px';", 3000);
        console.log(4);
        setTimeout("btnStart.enable();", 5000);
        setTimeout("btnQuit.enable();", 5000);
    }

    close()
    {
        btnStart.disable();
        btnQuit.disable();

        btnStart.set("START", function(){jeu.start(); });

        btnQuit.set("QUIT",function(){jeu.quit(); });
        document.getElementById("balle0").remove();

        console.log(1);
        setTimeout('console.log(11);document.getElementById("arene").style.height = "0px";', 1000) ;

        console.log(2);
        setTimeout('console.log(21);document.getElementById("arene").style.top = "240px";', 1000) ;
        console.log(3);
        setTimeout('console.log(31);document.getElementById("logo").style.top = "0px";', 1000);

        console.log(4);
        setTimeout('console.log(41);document.getElementById("arene").style.width = "0px";', 3000) ;
        console.log(5);
        setTimeout('console.log(51);document.getElementById("arene").style.display = "none";', 5000) ;

        console.log(6);
        setTimeout('console.log(61);btnStart.enable();',5000);
        console.log(7);
        setTimeout('console.log(71);btnQuit.enable();',5000);
    }
}