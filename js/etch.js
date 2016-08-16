createSquares(9);
colorHover();
resetSquares();
squaresNumber();




function createSquares(value){
	var size = 600 / value;
	var container = $("#container").html("");
	for(var i = 1; i <= value; i++){
		
		for(var j = 1; j <= value; j++){
			container.append($("<div></div>").addClass('squares').css({'width': size + "px", 'padding-bottom': size + "px"}));
		}
		container.append($("<div></div>").css({"clear": "both"}));
	}
	
}

function colorHover(){
	$('.squares').hover(function(){
		$(this).addClass('squares-hover');
	})
}

function resetSquares(){
	$('#reset-squares').click(function(){
		$('.squares').remove();
		createSquares(9);
		colorHover();
	})
}

function squaresNumber(){
	$('#squares-number-button').click(function(){
		var gridNumber = $('#squares-number-input').val();
		if(gridNumber > 0){
			$('.squares').remove();
			createSquares(gridNumber);
			colorHover();
		}
		
	})
}