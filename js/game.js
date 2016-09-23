var Game = function(boardArray) {
  this.boardMatrix = [];
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

Game.prototype.placeDisc = function(index){}

Game.prototype.matrixToBoard = function(){}
Game.prototype.whoeseTurn = function(){}


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



//Driver Code
// game = new Game();
// game.boardToMatrix()
// console.log(game.boardMatrix)