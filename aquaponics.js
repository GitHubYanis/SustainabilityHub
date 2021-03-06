var c;
var ctx;
const TIMEOUT = 500;

window.onload = function() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    
    var img = new Image();
    img.src="simulation_background.png";
    img.onload = function(){       
        ctx.drawImage(img, 0, 0);
    };

    $('.btn').each(function() {
        $(this).on('click', buttonClick);
    });
}


function step1() {
    //StepNumber
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("(1)", 30, 550);

    //Arrows
    ctx.font = "50px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("←", 100, 560);

    for (let i = 0; i < 6; i++) {
        setTimeout(function() {
                ctx.font = "50px Arial";
                ctx.fillStyle = "black";
                ctx.fillText("↑", 27, 480 - i*70);
            }, TIMEOUT*i);
    }

    setTimeout(function() {
        ctx.font = "50px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("↗", 35, 60);
    }, TIMEOUT*6);

    setTimeout(function() {
        ctx.font = "50px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("→", 82, 39);
    }, TIMEOUT*7);

    //Fish
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
function step2() {
    //StepNumber
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("(2)", 100, 100);

    //Plants
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

function step3() {
    //StepNumber
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("(3)", 370, 50);
}
function step4() {
    //StepNumber
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("(4)", 440, 400);

    //Arrows
    ctx.font = "50px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("↓", 456, 279);
    ctx.fillText("↓", 456, 340);
}

function buttonClick() {
    if ($(this).hasClass('active')) {
        $(this).next().animate({'opacity': 0});
    }
    else {
        $(this).next().animate({'opacity': 1});
        switch (this.id) {
            case 'btn1':
                step1();
                break;
            case 'btn2':
                step2();
                break;
            case 'btn3':
                step3();
                break;
            case 'btn4':
                step4();
                break;
        }
    }
}