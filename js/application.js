$(document).on('ready', function(){
	console.log('READY')
	game = new Game()
	clickEvents();
})

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
    game.whoseTurn();

    $.each(reversed, function( index, value ) {
      if(value.hasClass("boxTan") && done == false){
        if(whoseTurn == "R"){
          spot = $(this).attr('class').split(" ")[2].slice(-1)
          game.placeDisc(spot)
          game.whoWonVertical()
          value.removeClass("boxTan").addClass("boxRed");
        }
        else if(whoseTurn == "B"){
          spot = $(this).attr('class').split(" ")[2].slice(-1)
          game.placeDisc(spot)
          value.removeClass("boxTan").addClass("boxBlack");
          game.whoWonVertical()
        }
        done = true;

      }
    });
  })
}