function randomColor(){
    var colors = ["#afb840","#5b7729","#a1ac21","#c06e25","#f7bb5a","#7a3d14","#cd4716","#f18a55","#d2b294","#e0ab71"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function add(){
    Sqr(globalIndex++);
}

function image(){

    if (this.show){
        this.style.backgroundColor = randomColor();
        this.style.backgroundImage = "none";

        if(this.starred){
            var c = this.childNodes;
            c[0].style.backgroundColor = none;
        }

        this.show = false;
    }
    else{
        this.style.backgroundColor = "#FFFFFF";
        this.style.backgroundImage = "url(images/hamburger.png)";

        if(this.starred){
            var c = this.childNodes;
            c[0].style.backgroundColor = this.style.backgroundColor;
        }

        this.show = true;
    }
}

function Sqr(iCurrentSqr){
    this.show = false;
    this.starred= false;

    var sqrObj = document.createElement("section");

    if(iCurrentSqr == 0){
        sqrObj.className = "add";

        var plus = document.createElement("img");
        plus.className = "plus";
        plus.src = "images/plus.png";
        plus.title = "Add";

        sqrObj.appendChild(plus);

        plus.addEventListener("click",add);
    }
    else if((iCurrentSqr+1)%3 == 0){
        sqrObj.className = "starred";
        this.starred = true;

        var star = document.createElement("img");
        star.className = "star";
        star.src = "images/star.png";

        sqrObj.appendChild(star);

        sqrObj.addEventListener("click",image);
    }
    else{
        sqrObj.className = "square";

        sqrObj.addEventListener("click",image);
    }

    sqrObj.style.backgroundColor = randomColor();
    this.sqrColor = sqrObj.style.backgroundColor;

    document.getElementById("main").appendChild(sqrObj);
    
}

function calculateNum(name){
    return name.length * 2;
}

function SqrsManager(){
    var sqrsNum = calculateNum("Nosenko");  //The number of squares to create
    globalIndex = 0;

    //Creates the squares
    for(; globalIndex<sqrsNum; globalIndex++){
        Sqr(globalIndex);
    }
}