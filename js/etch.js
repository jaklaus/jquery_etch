
// set default grid size
var gridSize = 9;
var colorCondition = false;
var randomColorValue = "";

// call functions and create default grid
$(document).ready(function(){
	createSquares(gridSize);
	colorHover();
	resetSquares();
	setGridSize();
	gridSizeDisplay(gridSize);
	colorState();
	randomColor();
})

// creates rows of squares. assigns class 'squares', width, and padding to each square. uses nested for loop to draw columns
function createSquares(value){
	// value * 2 because pixel width borders
	$('#container').css({"width": 600 + (2*value) + "px", "height": 600 + (2*value) + "px"})
	var size = 600 / value;
	var container = $("#container").html("");
	for(var i = 1; i <= value; i++){
		for(var j = 1; j <= value; j++){
			container.append($("<div></div>").addClass('squares').css({'width': size + "px", 'padding-bottom': size + "px"}));
		}
			container.append($("<div></div>").css({"clear": "both"}));
	}
}

// hover functionality created through adding squares-hover class
function colorHover(){

	$('.squares').hover(function(){
		if(colorCondition === false){
			$(this).css({"background": "white"});
		} else {
			randomColor();
			$(this).css({"background": randomColorValue})
		}
		
	})
}

// buttons change color and black an white state
function colorState(){
	$('#black-white-button').click(function(){
		colorCondition = false;
	})
		
	$('#color-button').click(function(){
		colorCondition = true;
	})
		
	
}

// clicking button resets grid to its default state
function resetSquares(){
	$('#reset-squares').click(function(){
		createSquares(gridSize);
		colorHover();
		$('#squares-number-input').val('');
		gridSizeDisplay(gridSize);
	})
}

// with input and button set new grid size.
function setGridSize(){
	$('#squares-number-button').click(function(){
		var gridSize = $('#squares-number-input').val();
		if(gridSize > 0){
			$('.squares').remove();
			createSquares(gridSize);
			colorHover();
			gridSizeDisplay(gridSize);
			$('#squares-number-input').val('');
		}
		
	})
}
// displays current grid size on page
function gridSizeDisplay(value){
	$('#grid-size').html("<p>Grid Size: </p>" + value)
}

function randomColor(){

	var r = Math.ceil(Math.random() * 255)
	var g = Math.ceil(Math.random() * 255)
	var b = Math.ceil(Math.random() * 255)

	randomColorValue = "rgb(" + r + "," +  g + "," + b + ")";

	return randomColorValue;
}