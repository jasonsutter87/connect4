var Game = function(boardArray) {
  this.boardMatrix = [];
  this.currentTurn = 'R';
  if(boardArray != null){
  	this.board = boardArray
  }else{
  	this.board = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  }
}

Game.prototype.boardToMatrix = function() {
  boardMatrix = [];
  for (i=0; i<6; i++) {
    boardMatrix.push(this.board.slice((i*7), ((i+1)*7)));
  }
  this.boardMatrix = boardMatrix.reverse()
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
	if(index > 42){
		return "Spot not on the board"	
	}else if(this.board[index - 1] == ""){
		this.board[index - 1] = this.whoseTurn()
		return this.board
	}else{
		return "Spots Taken"
	}
}

Game.prototype.matrixToBoard = function(){}


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

