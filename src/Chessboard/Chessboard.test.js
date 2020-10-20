import { Chessboard } from "./Chessboard";

describe("Chessboard", () => {
  describe("Chessboard :: getAllPossibleSpots", () => {
    it("should return all possible movements for a king", () => {
      const piece = "king";
      const spot = "d5";
      const chessboard = Chessboard();
      const movements = chessboard.getAllPossibleSpots(piece, spot).split(",");
      const expectedMovememts = [
        "D6",
        "E6",
        "E5",
        "E4",
        "D4",
        "C4",
        "C5",
        "C6"
      ];

      expect(movements).toEqual(expect.arrayContaining(expectedMovememts));
    });

    it("should return all possible movements for a horse", () => {
      const piece = "horse";
      const spot = "e3";
      const chessboard = Chessboard();
      const movements = chessboard.getAllPossibleSpots(piece, spot).split(",");
      const expectedMovememts = [
        "F5",
        "G4",
        "G2",
        "F1",
        "D1",
        "C2",
        "C4",
        "D5"
      ];

      expect(movements).toEqual(expect.arrayContaining(expectedMovememts));
    });

    it("should return invalid input from an invalid input string", () => {
      const piece = "horsse";
      const spot = "e3";
      const chessboard = Chessboard();
      const movements = chessboard.getAllPossibleSpots(piece, spot);

      expect(movements).toEqual("invalid input");
    });
  });
});
