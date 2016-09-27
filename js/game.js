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


Game.prototype.transpose = function() {
  var array = this.boardMatrix;
  this.boardMatrix = array[0].map(function(col, i) {
    return array.map(function(row) {
        return row[i]
    })
  });
 }

Game.prototype.whoWon = function(){}
Game.prototype.gameOver = function(){}
Game.prototype.checkRows = function(){}
Game.prototype.checkDiangles = function(){}


game = new Game()
console.log(game.board)

game.placeDisc(1)
console.log(game.board)

game.placeDisc(2)
console.log(game.board)

game.placeDisc(1)
console.log(game.board)

