var c = document.getElementById("MyCanvas");
var ctx = c.getContext("2d");

// Sprites Loading

var hulk = new Image();
var im = new Image();
var thor = new Image();
hulk.src = "hulk.png";
im.src = "Iron_Man.png";
thor.src = "thor.png";
// Draw our sprite

im.onload = function(){
	ctx.drawImage(im,470,110,200,200);
}
hulk.onload = function(){
	ctx.drawImage(hulk,220,110,190,190);
}
thor.onload = function(){
	ctx.drawImage(thor,150,250,200,180);
}

//Skies and land
ctx.fillStyle = "sandybrown";
ctx.fillRect(0,380,800,150);
ctx.fillStyle = "midnightblue";
ctx.fillRect(0,0,800,380);

//Moon
ctx.beginPath();
ctx.arc(100,100,50,0, 6.28);
ctx.closePath();
ctx.fillStyle = "ivory";
ctx.fill();