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

function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0, 6.28);
	ctx.closePath();
	ctx.stroke();
	ctx. fillStyle = "red";
	ctx.fill();
}

//clear trail
function clear(){
    ctx.clearRect(0,0,600,400);
}
 
//draw frames
function draw(){
	clear();
	circle(x,y,30);

	if(x+mx <0 || x+mx>600){
		 mx = -mx;

	}

	if(y+my <0 || y+my>400){
		 my = -my;

	}
    //move the shape
    x += mx;
    y += my;
	    
}

init();