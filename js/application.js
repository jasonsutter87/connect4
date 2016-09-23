$(document).on('ready', function(){
	console.log('READY')
	clickEvents();
})

//start game
//update board

clickEvents = function(){
	$('.col1').on('click', function(){
		 console.log("Column 1 was clicked on")
	})

	$('.col2').on('click', function(){
		console.log("Column 2 was clicked on")
	})

	$('.col3').on('click', function(){
		console.log("Column 3 was clicked on")
	})

	$('.col4').on('click', function(){
		console.log("Column 4 was clicked on")
	})

	$('.col5').on('click', function(){
		console.log("Column 5 was clicked on")
	})
	
	$('.col6').on('click', function(){
		console.log("Column 6 was clicked on")
	})

	$('.col7').on('click', function(){
		console.log("Column 7 was clicked on")
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