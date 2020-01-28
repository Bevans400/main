

var numSquares = 6;
var colors = [];
var pickedColor;
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var btnplr1 = document.querySelector("#p1");
var btnplr2 = document.querySelector("#p2");
var rstButton = document.querySelector("#rst");
var plDisplay = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var scoreCap = document.querySelector("input");
var capDisplay = document.querySelector("#capDisplay");

btnplr1.addEventListener("click", function(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false		
});


init();

function init(){
	// mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	})
};

	for (var i = 0; i < squares.length; i++) {
	// add click listener to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			if (!gameOver) {
				p1Score++;
				if (p1Score === winningScore) {
					p1Display.classList.add("winner");
					gameOver = true;
					alert("WINNER~!!!");
				}
			p1Display.textContent = p1Score;

	}

		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			p1Score--;
			p1Display.textContent = p1Score;
		}
	});
}
reset();
}

function reset(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// Change color display to match picked color
	colorDisplay.textContent = pickedColor;
	// REturns button text to "New Colors" after pressed
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	// Change color of squares 
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
}

resetButton.addEventListener("click", function() {
	reset();
	h1.style.backgroundColor = "rgba(34, 44, 222, 0";
	colorDisplay.textContent = pickedColor;
	if (gameOver === true) {
		rst();	
		}
});



// loop through all squares
function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}
// Picks a Random color to serve as the winning color
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	// repeat num times
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor(){
	// red
	var r = Math.floor(Math.random() * 256);
	// green
	var g = Math.floor(Math.random() * 256);
	// blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function rst(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;

}
