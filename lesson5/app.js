console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//width and height of canvas
var width = 600;
var height = 400;

//ball x-y coordinates
//and magnitude of movement
var x,y;
var mx,my;
//initialize animation
function init(){
	x = 300;
	y = 200;
	mx = 3;
	my = 4;
    return setInterval(draw, 10);
}

function circle(x,y,r,color){
	ctx.beginPath();
	ctx.arc(x,y,r,0, 6.28);
	ctx.closePath();
	ctx.stroke();
	ctx. fillStyle = color;
	ctx.fill();
}

//clear trail
function clear(){
    ctx.clearRect(0,0,600,400);
}
 
//draw frames
function draw(){
	clear();
	circle(x,y,30,circleColor);

	if(x+mx <0 || x+mx>600){
		 mx = -mx;
         circleColor = randomColor();
	}

	if(y+my <0 || y+my>400){
		 my = -my;
         circleColor = randomColor();
	}
    //move the shape
    x += mx;
    y += my;
	    
}

init();

//challenge color
var circleColor = "rgb(255,0,0)";

//challenge random color
function randomColor(){
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	return "rgb(" + r + "," + g + "," + b +")";
}