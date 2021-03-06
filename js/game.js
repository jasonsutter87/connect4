function transpose(boardArray) {
    return boardArray[0].map(function (_, c){
    	 return boardArray.map(function (r) {
    	 	 return r[c];
	 	});
	});
}

var Game = function(boardArray) {
  this.currentTurn = 'R';
  if(boardArray != null){
  	this.board = boardArray
  }else{
  	this.board = [[],[],[],[],[],[],[]]
  }
}

Game.prototype.nextTurn = function(){
	var turn = document.getElementById("Turn");
	if(this.currentTurn == 'R'){
		 $('#Turn').css('background-color', 'black')
		 this.currentTurn = 'B'
	}else{
		 $(turn).css('background-color', 'red')
		 this.currentTurn = 'R'
	}
}

Game.prototype.whoseTurn = function(){
	if(this.currentTurn == 'R'){
		this.nextTurn()
		return 'R'
	}else{
		this.nextTurn()
		return 'B'
	}
}

Game.prototype.placeDisc = function(index){
	if(this.board[index - 1].length < 6){
		this.board[index - 1].push(this.whoseTurn())
		return this.board
	}
}


Game.prototype.matrixToBoard = function(){
	this.board = [].concat.apply([], this.boardMatrix )
}

Game.prototype.whoWonVertical = function(){
	for(var i = 0; i < 6; i++){
		red = []
		black = []
		if(game.board[i].length >= 4){
			game.board[i].forEach(function(value){
				if(value == "R"){
					black = []
					red.push(value)
				}else {
					red = []
					black.push(value)
				}
			})

			if(red.length != 4 && black.length != 4 ){
				red = []
				black = []
			}else{
				if(red.length >= 4 ){
					alert("RED WON!")
					return "RED WON!"
				}else{
					alert("BLACK WON!")
					return "BLACK WON!"
				} 
			}
			
		}		
	}
}


Game.prototype.whoWonHorizontal = function(){
	transposed = transpose(this.board)
	for(var i = 0; i < 6; i++){
		red = []
		black = []
		if(transposed[i] != undefined){
			transposed[i].forEach(function(k){
				if(k == 'R'){
					black = []
					red.push(k)
				}else if(k == 'B'){
					red = []
					black.push(k)
				}
			})

			if(red.length != 4 && black.length != 4 ){
				red = []
				black = []
			}else{
				if(red.length >= 4 ){
					console.log("RED WON!")
					alert("RED WON!")
					return "RED WON!"
				}else{
					console.log("BLACK WON!")
					alert("BLACK WON!")
					return "BLACK WON!"
				} 
			}
			
		
		}
	}

}
