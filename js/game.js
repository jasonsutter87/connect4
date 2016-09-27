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
	if(this.currentTurn == 'R'){
		 this.currentTurn = 'B'
	}else{
		 this.currentTurn = 'R'
	}
}

Game.prototype.whoseTurn = function(){
	if(this.currentTurn == ''){
		this.nextTurn()
		return 'R'
	}else if(this.currentTurn == 'R'){
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
	}else{
		return "Spots Taken"
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
					red.push(value)
				}else{
					black.push(value)
				}
			})
			if(red.length != 4 && black.length != 4 ){
				red = []
				black = []
			}else{
				if(red.length >= 4 ){
					console.log("RED WON!")
				}else{
					console.log("BLACK WON!")
				} 
			}
			
		}
			
	}
}
Game.prototype.gameOver = function(){}
Game.prototype.checkRows = function(){}
Game.prototype.checkDiangles = function(){}

// //DRIVER CODE
// game = new Game()
// // console.log(game.board)
// game.whoWonVertical()



// game.placeDisc(1)
// // console.log(game.board)
// game.whoWonVertical()

// game.placeDisc(2)
// // console.log(game.board)
// game.whoWonVertical()

// game.placeDisc(1)
// // console.log(game.board)
// game.whoWonVertical()

// game.placeDisc(2)
// // console.log(game.board)
// game.whoWonVertical()

// game.placeDisc(1)
// // console.log(game.board)
// game.whoWonVertical()

// game.placeDisc(2)
// // console.log(game.board)
// game.whoWonVertical()

// game.placeDisc(1)
// console.log(game.board)
// game.whoWonVertical()
