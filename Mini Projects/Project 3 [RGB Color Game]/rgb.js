var squares = document.querySelectorAll(".square");
var reset = document.querySelector("#reset");
var message = document.querySelector("#message");
var body = document.querySelector("body");
var header = document.querySelector("header");
var goal = document.querySelector("#goal");

var numSquares = 6;
var colors = getColors(numSquares);
fillSquares(numSquares);
var pickedColor = pickColor(colors);
goal.textContent = pickedColor; 

body.style.backgroundColor = "#232323";
reset.addEventListener("click", resetGame);


//event listeners to the squares
for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		
		if(clickedColor === pickedColor) {
			message.textContent = "Correct!";

			for(var i = 0; i < squares.length; i++) {
				squares[i].style.background = pickedColor;
			}

			header.style.background = pickedColor;
			reset.textContent = "Play Again?";
		} 
		
		else {
			message.textContent = "Incorrect";
			this.style.background = "#232323";
		}
	});
}


//resets the game
function resetGame(){
	header.style.backgroundColor = "steelblue";
	message.textContent = "";
	reset.textContent = "New Color";

	colors = getColors(numSquares);
	fillSquares(squares, colors);
	pickedColor = pickColor(colors);
	goal.textContent = pickedColor;
}


//returns array of colors
function getColors(num){
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	return arr;
}


//picks a color from a bunch of choices
function pickColor(choices) {
	var random = Math.floor(Math.random() * choices.length);
	return choices[random];
}


//fills all squares with the colors
function fillSquares(squares, colors) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}


//generates an r,g,b value for a color
function makeColor() {
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
