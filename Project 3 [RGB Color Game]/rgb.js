var square = document.querySelectorAll(".square");
var reset = document.querySelector("#reset");
var message = document.querySelector("#message");
var body = document.querySelector("body");
var header = document.querySelector("header");

var color = [];
var winColor, winIndex, goal;
var numSquare = 6;
setSquareColor(numSquare);

body.style.backgroundColor = "#232323";

//anytime a square is clicked
for(var i=0; i<square.length; i++){
	square[i].addEventListener('click', function(){

		if(winColor == this.style.backgroundColor)
			convertAll(winColor);
		else{
			this.style.backgroundColor = body.style.backgroundColor;
			message.textContent = "Try Again!";
		}

	});
}

//when you win
function convertAll(){

	for(var i=0; i<square.length; i++){
		square[i].style.backgroundColor = winColor.toString();
		header.style.backgroundColor = winColor.toString();
		reset.textContent = "Play Again?";
		message.textContent = "Correct!";
	}

}

function rgbGen(){

	//generate the three colour streams
	var red = Math.floor(Math.random() * (256));
	var green = Math.floor(Math.random() * (256));
	var blue = Math.floor(Math.random() * (256));

	var genColor = "RGB (" + red.toString() + ", " + green.toString() + ", " + blue.toString() + ")";
	return genColor;
}

function setSquareColor(numSquare){

	header.style.backgroundColor = "steelblue";
	color.length = numSquare;

	//generating 6 colours
	for(var i=0; i<numSquare; i++)
		color[i] = rgbGen();

	//setting the 6 colours to the squares
	for(var i=0; i<numSquare; i++)
		square[i].style.backgroundColor = color[i].toString();

	winIndex = Math.floor(Math.random() * (color.length)); //set the winning color at random

	goal = document.querySelector("#goal");
	goal.textContent = color[winIndex]; //setting the array index
	winColor = color[winIndex]; //setting the color that is the winning color
	message.textContent = "";
}

reset.addEventListener("click", function(){
	setSquareColor(numSquare);
	reset.textContent = "New Colors";
});