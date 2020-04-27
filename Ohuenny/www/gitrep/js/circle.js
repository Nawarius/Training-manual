'use strict'
//alert("Step one");
let circleButton = document.getElementById("circleButton");
let pointCounter = document.getElementById("point");
let centerPoint = document.getElementById("center");

pointCounter.style.height = 10 + "px";
let circleInterval;

let radius = 100; 
let angle = 0;
let cosAlpha = Math.cos(angle);
let sinAlpha = Math.sin(angle);

let centerCoords = centerPoint.getBoundingClientRect();
let pointCoords = pointCounter.getBoundingClientRect();

centerPoint.style.left = 200 + "px";
centerPoint.style.top = 200 + "px"; 

let x,y;

let a = parseInt(centerPoint.style.left);
let b = parseInt(centerPoint.style.top);
//alert(pointCounter.style.height);
let n = 0;

function circleButtonClick(){
	circleButton.disabled = "disabled";
	pointCounter.style.backgroundColor = "red";
	document.getElementById("coords").innerHTML = pointCounter.style.top;
	document.getElementById("centerCoords").innerHTML = angle;
	
	if(n==0){
		

		
		x = (a + radius * Math.cos(angle)) + "px";
		y = ((b + radius * Math.sin(angle))+20) + "px";
		
		pointCounter.style.top = x;
		pointCounter.style.left = y;
		n++;
		angle+=0.1;	
		
	}
	else {
		
		x = (a + radius * Math.cos(angle)) + "px";
		y = ((b + radius * Math.sin(angle))+10) + "px";
		
		
		
		pointCounter.style.top = y;
		pointCounter.style.left = x;
		angle>360?angle=0:angle+=0.1;	
	};
};
function circleOn(){
	circleInterval = setInterval(circleButtonClick,25);
};
function circleOff(){
	circleButton.disabled = "";
	clearInterval(circleInterval);
};