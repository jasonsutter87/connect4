$(document).on('ready', function(){
	console.log('READY')

	game = new Game()
	clickEvents();
})

//start game
//update board

clickEvents = function(){

  //This function will know where the user has clicked and will be able to display all element that belongs to that column
  $(".center .box").on("click", function(e){
    //select the name of the class that was clicked. It will be a string with three class names
    var col = $(this).attr("class");

    //slice the col#number class name from the string with three class name.
    //Get all div with that class, reverser it and then call .each
    $($("."+col.slice(11)).get().reverse()).each(function( index, value ) {
        console.log(value);
        console.log(index);
    });
  })



	$('.col1').on('click', function(){
		 game.placeDisc($(this).attr('id'))
		 if(game.board[$(this).attr('id') - 1] == "R"){
		 	$(this).css('background-color', 'red')
		 }else{
		 	$(this).css('background-color', 'black')
		 }
	})

	$('.col2').on('click', function(){
		game.placeDisc($(this).attr('id'))
		 if(game.board[$(this).attr('id') - 1] == "R"){
		 	$(this).css('background-color', 'red')
		 }else{
		 	$(this).css('background-color', 'black')
		 }
	})

	$('.col3').on('click', function(){
		game.placeDisc($(this).attr('id'))
		 if(game.board[$(this).attr('id') - 1] == "R"){
		 	$(this).css('background-color', 'red')
		 }else{
		 	$(this).css('background-color', 'black')
		 }
	})

	$('.col4').on('click', function(){
		game.placeDisc($(this).attr('id'))
		 if(game.board[$(this).attr('id') - 1] == "R"){
		 	$(this).css('background-color', 'red')
		 }else{
		 	$(this).css('background-color', 'black')
		 }
	})

	$('.col5').on('click', function(){
		game.placeDisc($(this).attr('id'))
		 if(game.board[$(this).attr('id') - 1] == "R"){
		 	$(this).css('background-color', 'red')
		 }else{
		 	$(this).css('background-color', 'black')
		 }
	})

	$('.col6').on('click', function(){
		game.placeDisc($(this).attr('id'))
		 if(game.board[$(this).attr('id') - 1] == "R"){
		 	$(this).css('background-color', 'red')
		 }else{
		 	$(this).css('background-color', 'black')
		 }
	})

	$('.col7').on('click', function(){
		game.placeDisc($(this).attr('id'))
		 if(game.board[$(this).attr('id') - 1] == "R"){
		 	$(this).css('background-color', 'red')
		 }else{
		 	$(this).css('background-color', 'black')
		 }
	})
}

function keyDown(e) {
  switch(e.keyCode){
    case 49:
      console.log("1 was pressed")
      break;
    case 50:
      console.log("2 was pressed")
      break;
    case 51:
      console.log("3 was pressed")
      break;
    case 52:
      console.log("4 was pressed")
      break;
    case 53:
      console.log("5 was pressed")
      break;
    case 54:
      console.log("6 was pressed")
      break;
    case 55:
      console.log("7 was pressed")
      break;
    default:
      console.log("Please use the '1..7' keys on the keyboard")
  }
}

function init(){
  window.addEventListener("keypress", keyDown, false);
}

window.addEventListener('load', init, false);
