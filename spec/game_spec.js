describe("generates a new board", function() {
  beforeEach(function() {
    game = new Game();
    gameBoard = []
    for (var i = 1; i <= 42; i++) {
      gameBoard.push('');
    }
  });

  it("board should not be null", function() {
     expect(game.board).not.toBeNull();
  });

  it("board should should have 42 spots", function() {
     expect(game.board.length).toEqual(42);
  });

  it("board should be fill will all empty strings", function() {
     expect(game.board).toEqual(gameBoard);
  });
});


describe("determins whoese turn", function() {
  beforeEach(function() {
    game = new Game(['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']);
    game1 = new Game(['R','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']);
    game2 = new Game(['R','B','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']);
  });

  it("red always goes first", function() {
     expect(game.whoeseTurn()).toEqual('Red');
  });

  it("black goes after red", function() {
     expect(game.whoeseTurn()).toEqual('Black');
  });

  it("red goes after black", function() {
     expect(game.whoeseTurn()).toEqual('Red');
  });
});


describe("game play", function() {
  beforeEach(function() {
    game1 = new Game(['R','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']);
    game2 = new Game(['R','B','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']);
    game3 = new Game(['R','B','','','','','','R','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']);
  });

  it("red turn, places disc in location number 1", function() {
     expect(game.placeDisc(1)).toEqual(game1.board);
  });

  it("red turn, places disc in location number 2", function() {
     expect(game.placeDisc(2)).toEqual(game2.board);
  });

  it("red turn, places disc in location number 8", function() {
     expect(game.placeDisc(8)).toEqual(game3.board);
  });
});