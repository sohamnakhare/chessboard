import { Piece } from "./Piece";

describe("Piece", () => {
  describe("Piece :: createPiece", () => {
    it("should create a horse", () => {
      const piece = Piece();
      const horse = piece.createPiece("horse", "A1");
      expect(horse.type).toBe("horse");
    });
  });
});
