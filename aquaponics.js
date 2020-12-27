var c;
var ctx;

window.onload = function() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    
    var img = new Image();
    img.src="simulation_background.png";
    img.onload = function(){       
        ctx.drawImage(img, 0, 0);
        displayRest();
    };

    $('.btn').each(function() {
        $(this).on('click', buttonClick);
    });
}

function displayRest() {
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

    var plant = new Image();
    plant.src="plant.png";
    plant.onload = function(){ 
        ctx.save();  
        ctx.scale(1,1);    
        ctx.drawImage(plant, 150, 0);  
        ctx.restore();  
    };

    var plant3 = new Image();
    plant3.src="plant.png";
    plant3.onload = function(){ 
        ctx.save();  
        ctx.scale(1,1);    
        ctx.drawImage(plant3, 210, 5);  
        ctx.restore();  
    };

    var plant3 = new Image();
    plant3.src="plant.png";
    plant3.onload = function(){ 
        ctx.drawImage(plant3, 270, 0);  
    };

    var plant3 = new Image();
    plant3.src="plant.png";
    plant3.onload = function(){ 
        ctx.drawImage(plant3, 330, 8);  
    };

    var plant3 = new Image();
    plant3.src="plant.png";
    plant3.onload = function(){ 
        ctx.drawImage(plant3, 390, 18);  
    };

    var plant3 = new Image();
    plant3.src="plant.png";
    plant3.onload = function(){ 
        ctx.drawImage(plant3, 450, 14);  
    };

}

function buttonClick() {
    if ($(this).hasClass('active')) {
        $(this).next().animate({'opacity': 0});
    }
    else {
        $(this).next().animate({'opacity': 1});
    }
}