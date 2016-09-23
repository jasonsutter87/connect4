var Game = function(boardString) {
  this.boardMatrix = [];
  this.tempBoard = [];
  this.board = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
 }


Game.prototype.boardToMatrix = function(){}
Game.prototype.matrixToBoard = function(){}
Game.prototype.whoesTurn = function(){}
Game.prototype.placeDisc = function(){}


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