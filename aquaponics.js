var c;
var ctx;

window.onload = function() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    
    var img = new Image();
    img.src="simulation_background.png";
    img.onload = function(){       
        ctx.drawImage(img, 0, 0);
    };

    var fish = new Image();
    fish.src="fishreal.png";
    fish.onload = function(){       
        ctx.drawImage(fish, 350, 450);      
    };   

    var fish2 = new Image();
    fish2.src="fishreal.png";
    fish2.onload = function(){ 
        ctx.save();
        ctx.scale(-0.8,0.8);  
        ctx.drawImage(fish2, -200, 500);
        ctx.restore();
    };

    var fish3 = new Image();
    fish3.src="fishreal.png";
    fish3.onload = function(){ 
        ctx.save();
        ctx.scale(-1.1,1.1);  
        ctx.drawImage(fish3, -200, 450);
        ctx.restore();
    };
}

function step1() {
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();    
}