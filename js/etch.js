
// set default grid size
var gridSize = 9;

// call functions and create default grid
$(document).ready(function(){
	createSquares(gridSize);
	colorHover();
	resetSquares();
	setGridSize();
	gridSizeDisplay(gridSize);
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
		$(this).addClass('squares-hover');
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
		}
		
	})
}
// displays current grid size on page
function gridSizeDisplay(value){
	$('#grid-size').html("<p>Grid Size: </p>" + value)
}