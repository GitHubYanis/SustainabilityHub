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
}

function step1() {
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();    
}