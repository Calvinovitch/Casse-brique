//===================================
//== BALLE===========================
//===================================

 class point
 {
     x;
     y;
     isIn;

     constructor(x,y)
     {
        this.x = x;
        this.y = y;
        this.isIn = false;
     }
  
 }

class classBalle
{
    name;
    id;
    isMoving
    fixed;
    ys;
    xs;
    i;
    dy;

    run;
    
    constructor(id)
    {
        this.name = "balle";

        this.id = id;

        this.isMoving = false;

        this.catched = false;

        this.x = 220;
        this.y = 440;
        this.xs = 1;
        this.ys = 2;

       
    }

    createElement()
    {
        // for(a=0;a<10;a++)
        // {
        console.log("jeu.arene.balles["+this.id+"].createElement()");
        let balle = document.createElement("div");
        balle.id = "balle"+ this.id;
        balle.className = "balle";
        balle.style.position = "absolute";
        balle.style.top = this.y + "px";
        balle.style.left = this.x + "px"; 
        document.getElementById("arene").appendChild(balle);

        
        //}

    //  for(a=0;a<10;a++)
    //     {
    //         objBalle[a] = new classBalle(a);
    //         setTimeout("objBalle["+a+"].go()",a*500);
    //     }
    }
    

    move()
    {
            
        if(this.isMoving == false)
        {    

            this.isMoving = true;
            //== Collision Briques ====================
            let dy = this.y + this.ys;
            let dx = this.x + this.xs;

            jeu.arene.mur.briques.forEach(brique => 
            {
                if(brique.c != '_')
                {
                    let collision = false;
                    let points = new Array(8);

                    points[0] = new point (dx   ,dy -7);
                    points[1] = new point (dx +5,dy -5);
                    points[2] = new point (dx +7,dy   );
                    points[3] = new point (dx +5,dy +5);
                    points[4] = new point (dx   ,dy +7);
                    points[5] = new point (dx -5,dy +5);
                    points[6] = new point (dx -7,dy   );
                    points[7] = new point (dx -5,dy   );

                   
                    for(let i = 0; i<8; i++)
                    {
                        if((points[i].x >= brique.x1 && points[i].x <= brique.x2) && (points[i].y >= brique.y1 && points[i].y <= brique.y2))
                        {
                            points[i].isIn = true;
                            console.log("isIn:"+ points[i].isIn );
                        }
                    }

                    //==Vertical ======================

                    if ((points[0].isIn &&  !points[4].isIn) || (points[4].isIn && !points[0].isIn))
                    {
                        this.ys = this.ys * -1;
                        collision = true;
                    }

                    // //== Horizontal ===================

                    if ((points[6].isIn && !points[2].isIn) || (points[2].isIn && !points[6].isIn))
                    {
                        this.xs = this.xs * -1;
                        collision = true;
                    }

                    // //== Diagonal======================
                    
                    if (((points[1].isIn && !points[5].isIn) || (points[5].isIn && !points[1].isIn)) ||
                    ((points[7].isIn && !points[3].isIn) || (points[3].isIn && !points[7].isIn)))
                    {
                        this.xs = this.xs * -1;
                        this.ys = this.ys * -1;
                        collision = true;
                    }

                    if(collision)
                    {
                        let el = document.getElementById("brique" + brique.id);
                        el.parentNode.removeChild(el);

                        brique.c = '_';
                    }

                }   

            }); 

            //== Collision Mur ========================
            
            // console.log("jeu.arene.balles["+this.id+"].move()");

            // console.log("catched :" + this.catched);
            if(this.x < 7 || this.x > 513)
            {
                this.xs = this.xs * -1;
            }
            
            if(this.catched == false)
            {
                this.x = this.x + this.xs
            }
            else
            {
                this.x = jeu.arene.batte.x1 +40;
            }

            if(this.y < 7 || this.y > 513)
            {
                this.ys = this.ys * -1;
            }
            
            if(this.catched == false)
            {
                this.y = this.y + this.ys
            }
                
            this.moveTo(this.x,this.y);

            if (this.y > 450 && this.x > jeu.arene.batte.x1 && this.x < jeu.arene.batte.x1 + 80)
            {
                this.ys = this.ys * -1;
            }

            this.isMoving =  false;
        }    
    }


    moveTo(x,y)
    {
        // console.log("jeu.arene.balles["+this.id+"].moveTo()");
        document.getElementById("balle"+this.id).style.left = (x - 7) + "px";
        document.getElementById("balle"+this.id).style.top  = (y - 7) + "px";

    }

    setOnclickEvent()
    {

    }

    onClickAction(id)
    {

    }

    reset()
    {

    }

    go()
    {
        
        console.log("jeu.arene.balles[0].go()");
        console.log("catched:" + this.catched);

        if(this.run == null || this.run == undefined)
        {
            this.run = setInterval(() => {this.move()},10);
        }
        else
        {
            this.catched = false; 
        }    
    }

    stop()
    {
        if(this.run != null && this.run != undefined)
        {
            clearInterval(this.run);
            this.run = null;
        }
    }    
}