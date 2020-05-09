const BACKGROUND_COLOR ='#000000';
const LINE_COLOR = '#FFFFFF';
const LINE_WIDTH = 15;

var currentX =0;
var currentY =0;
var previousX=0;
var previousY=0;

var isPanting = false;

var context;
var content;

function prepareCanvas(){
	// console.log('preparing canvas');
	canvas = document.getElementById('myCanvas');
	context = canvas.getContext('2d');

	context.fillStyle = BACKGROUND_COLOR;

	context.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);

	context.strokeStyle =LINE_COLOR;
	context.lineWidth = LINE_WIDTH;
	context.lineJoin = 'round';

	document.addEventListener('mousedown', function(event){
		// console.log('mouse clicked');
		isPanting=true;
		currentX = event.clientX-canvas.offsetLeft;
		currentY = event.clientY- canvas.offsetTop;
		




	});
	document.addEventListener('mouseup', function(event){

		// console.log('mouse released');

		isPanting = false;

	});




	document.addEventListener('mousemove', function(event){
		

	if(isPanting){
		previousX = currentX;
		currentX = event.clientX-canvas.offsetLeft;

		previousY = currentY;
		currentY = event.clientY- canvas.offsetTop;

		draw();
	}
		
		
	});

	canvas.addEventListener('mouseleave', function(event){
		isPanting = false;

	});

	//touch event

	canvas.addEventListener('touchstart', function(event){
		// console.log('touch down');
		isPanting=true;
		currentX = event.touches[0].clientX-canvas.offsetLeft;
		currentY = event.touches[0].clientY- canvas.offsetTop;
    

	});

	canvas.addEventListener('touchend', function(event){
		isPanting = false;

	});
	canvas.addEventListener('touchcancel', function(event){
		isPanting = false;

	});

	document.addEventListener('touchmove', function(event){

	if(isPanting){
		previousX = currentX;
		currentX = event.touches[0].clientX-canvas.offsetLeft;

		previousY = currentY;
		currentY = event.touches[0].clientY- canvas.offsetTop;
		draw();

		
	}
		
		
	});
}


function draw(){
	context.beginPath();
	context.moveTo(previousX, previousY);
	context.lineTo(currentX,currentY);
	context.closePath();
	context.stroke();


}



function clearCanvas(){

	currentX =0;
	currentY =0;
	previousX=0;
	previousY=0;

	context.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);




}