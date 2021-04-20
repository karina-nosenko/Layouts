//Returns a random color
function randomColor(){
    var colors = ["#afb840","#5b7729","#a1ac21","#c06e25","#f7bb5a","#7a3d14","#cd4716","#f18a55","#d2b294","#e0ab71"];
    return colors[Math.floor(Math.random() * colors.length)];
}

//Calculates a number of squares to create
function calculateNum(name){
    return name.length * 2;
}

//Constructor of the square object
function Sqr(iCurrentSqr){
    this.id = iCurrentSqr;      //personal index
    this.color = randomColor(); //square color
    this.type = "regular";      //type of the square
    this.show = false;          //is the image opened
    this.square = document.createElement("article");    //the square object

    var plus = document.createElement("span");
    var star = document.createElement("span");
    this.getPlus = function() { return plus; };

    //define the type of the square
    if(this.id == 0)            this.type = "add";
    if((this.id+1) % 3 == 0)    this.type = "starred";

    //define the square properties
    this.square.className = "square";
    this.square.style.backgroundColor = this.color;
    
    if(this.type == "add"){             //the "add" square
        this.square.className = "add";

        plus.className = "plus";
        plus.title = "Add";
        this.square.appendChild(plus);
    }
    else if(this.type == "starred"){    //the starred square
        this.square.className = "starred";

        star.className = "star";
        this.square.appendChild(star);
    }

    //variables to use into scope
    var tobj = this.square; 
    var tshow = this.show;
    var tcolor = this.color;
    var ttype = this.type;

    //onclick event for "add" and "starred" square
    if(this.type != "add"){     
        tobj.onclick = function(){
            tshow = !tshow;
            if(tshow){
                tobj.style.backgroundColor = "#FFFFFF";
                tobj.style.backgroundImage = "url(images/hamburger.png";

                if(ttype == "starred"){
                    star.style.backgroundColor = tcolor;
                }
            }
            else{
                tobj.style.backgroundColor = tcolor;
                tobj.style.backgroundImage = "none";

                if(ttype == "starred"){
                    star.style.backgroundColor = "none";
                }
            }
        };
    }

    //append the square to the DOM
    document.getElementsByTagName("main")[0].appendChild(this.square);
}

//Creates the square objects
function SqrsManager(){
    var numOfSquares = calculateNum("Nosenko");

    for(var i=0; i<numOfSquares; i++){
        var newObj = new Sqr(i);
        
        //add a new square by clicking on the plus icon
        var adder = newObj.getPlus();
    
        adder.onclick = function(){
            numOfSquares++;
            newObj = new Sqr(i++);
        };  
    }
}