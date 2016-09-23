var Game = function(boardArray) {
  // this.boardMatrix = [];
  // this.tempBoard = [];
  if(boardArray != null){
  	this.board = boardArray
  }else{
  	this.board = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  }
 }


Game.prototype.boardToMatrix = function(){}
Game.prototype.matrixToBoard = function(){}
Game.prototype.whoeseTurn = function(){}
Game.prototype.placeDisc = function(index){}


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



// //Driver Code
// game = new Game();
// console.log(game.board);