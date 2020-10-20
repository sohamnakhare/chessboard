import { Piece } from "./Piece";

describe("Piece", () => {
  describe("Piece :: createPiece", () => {
    it("should create a horse", () => {
      const piece = Piece();
      const horse = piece.createPiece("horse");
      expect(horse.type).toBe("horse");
    });

    it("should create a king", () => {
      const piece = Piece();
      const horse = piece.createPiece("king");
      expect(horse.type).toBe("king");
    });

    it("should throw an exception for invalid piece type", () => {
      const piece = Piece();
      expect(() => piece.createPiece("random")).toThrow();
    });
  });
});
