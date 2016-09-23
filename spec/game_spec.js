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