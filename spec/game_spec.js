describe("generates a new board", function() {
  beforeEach(function() {
    game = new Game();
    gameBoard = [[],[],[],[],[],[],[]]
    
  });

  it("board should not be null", function() {
     expect(game.board).not.toBeNull();
  });

  it("board should should have 42 spots", function() {
     expect(game.board.length).toEqual(7);
  });

  it("board should be fill will all empty strings", function() {
     expect(game.board).toEqual(gameBoard);
  });
});


describe("determins whoese turn", function() {
  beforeEach(function() {
    game = new Game();
  });

  it("red always goes first", function() {
     expect(game.currentTurn).toEqual('R');
  });

  it("black goes after red", function() {
     game.placeDisc(1);
     expect(game.currentTurn).toEqual('B');
  });

  it("red goes after black", function() {
     game.placeDisc(1);
     game.placeDisc(2);
     expect(game.currentTurn).toEqual('R');
  });
});


describe("game play", function() {
  beforeEach(function() {
    game = new Game();
    game1 = [['R'],[],[],[],[],[],[]]
    game2  = [['R','B'],[],[],[],[],[],[]]
    game3  = [['R','B'],['R'],[],[],[],[],[]]
  });

  it("red turn, places disc in location number 1", function() {
     expect(game.placeDisc(1)).toEqual(game1);
  });

  it("black turn, places disc in location number 2", function() {
     game.placeDisc(1)
     expect(game.placeDisc(1)).toEqual(game2);
  });

  it("red turn, places disc in location number 8", function() {
     game.placeDisc(1)
     game.placeDisc(1)
     expect(game.placeDisc(2)).toEqual(game3);
  });

});

describe("Vertical Win Check", function() {
  it("Red will win!", function() {
     game = new Game();
     game.board = [['R','R','R','R'],['B','B','B'],[],[],[],[],[]]
     expect(game.whoWonVertical()).toEqual("RED WON!");
  });

  it("Black will win!", function() {
     game = new Game();
     game.board = [['R','R'],['R','R'],[],[],['B','B','B','B'],[],[]]
     expect(game.whoWonVertical()).toEqual("BLACK WON!");
  });
});

describe("Horizontal Win Check", function() {
  it("Red will win!", function() {
     game = new Game();
     game.board = [['R','B'],['R','B'],['R','B'],['R'],[],[],[]]
     expect(game.whoWonHorizontal()).toEqual("RED WON!");
  });

  it("Black will win!", function() {
     game = new Game();
     game.board = [['B','R'],['B','R'],['B','R'],['B'],[],[],[]]

     console.log(game.board )
     expect(game.whoWonHorizontal()).toEqual("BLACK WON!");
  });
});