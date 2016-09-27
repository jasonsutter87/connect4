$(document).on('ready', function(){
	console.log('READY')

	game = new Game()
	clickEvents();
})

//start game
//update board

reverse = function(array){
  var reversedArray = [];
  for (column = 1; column < 7; column++){ reversedArray.push(array.eq(-column)); }
  return reversedArray
}

clickEvents = function(){
  $(".center .box").on("click", function(e){
    var reversed = reverse($("."+$(this).attr("class").slice(11)));
    var done = false;
    var whoseTurn = game.whoseTurn();
    $.each(reversed, function( index, value ) {
      if(value.hasClass("boxTan") && done == false){
        if(whoseTurn == "R"){value.removeClass("boxTan").addClass("boxRed");}
        else if(whoseTurn == "B"){value.removeClass("boxTan").addClass("boxBlack");}
        done = true;
      }
    });
  })



// 	$('.col1').on('click', function(){
// 		 game.placeDisc($(this).attr('id'))
// 		 if(game.board[$(this).attr('id') - 1] == "R"){
// 		 	$(this).css('background-color', 'red')
// 		 }else{
// 		 	$(this).css('background-color', 'black')
// 		 }
// 	})

// 	$('.col2').on('click', function(){
// 		game.placeDisc($(this).attr('id'))
// 		 if(game.board[$(this).attr('id') - 1] == "R"){
// 		 	$(this).css('background-color', 'red')
// 		 }else{
// 		 	$(this).css('background-color', 'black')
// 		 }
// 	})

// 	$('.col3').on('click', function(){
// 		game.placeDisc($(this).attr('id'))
// 		 if(game.board[$(this).attr('id') - 1] == "R"){
// 		 	$(this).css('background-color', 'red')
// 		 }else{
// 		 	$(this).css('background-color', 'black')
// 		 }
// 	})

// 	$('.col4').on('click', function(){
// 		game.placeDisc($(this).attr('id'))
// 		 if(game.board[$(this).attr('id') - 1] == "R"){
// 		 	$(this).css('background-color', 'red')
// 		 }else{
// 		 	$(this).css('background-color', 'black')
// 		 }
// 	})

// 	$('.col5').on('click', function(){
// 		game.placeDisc($(this).attr('id'))
// 		 if(game.board[$(this).attr('id') - 1] == "R"){
// 		 	$(this).css('background-color', 'red')
// 		 }else{
// 		 	$(this).css('background-color', 'black')
// 		 }
// 	})

// 	$('.col6').on('click', function(){
// 		game.placeDisc($(this).attr('id'))
// 		 if(game.board[$(this).attr('id') - 1] == "R"){
// 		 	$(this).css('background-color', 'red')
// 		 }else{
// 		 	$(this).css('background-color', 'black')
// 		 }
// 	})

// 	$('.col7').on('click', function(){
// 		game.placeDisc($(this).attr('id'))
// 		 if(game.board[$(this).attr('id') - 1] == "R"){
// 		 	$(this).css('background-color', 'red')
// 		 }else{
// 		 	$(this).css('background-color', 'black')
// 		 }
// 	})
}

// function keyDown(e) {
//   switch(e.keyCode){
//     case 49:
//       console.log("1 was pressed")
//       break;
//     case 50:
//       console.log("2 was pressed")
//       break;
//     case 51:
//       console.log("3 was pressed")
//       break;
//     case 52:
//       console.log("4 was pressed")
//       break;
//     case 53:
//       console.log("5 was pressed")
//       break;
//     case 54:
//       console.log("6 was pressed")
//       break;
//     case 55:
//       console.log("7 was pressed")
//       break;
//     default:
//       console.log("Please use the '1..7' keys on the keyboard")
//   }
// }

// function init(){
//   window.addEventListener("keypress", keyDown, false);
// }

// window.addEventListener('load', init, false);
