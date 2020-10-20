import { King } from "./King";

describe("King", () => {
  describe("King :: getAllPossibleMovements", () => {
    it("should return all the possible postion based on the current position", () => {
      const king = King();
      const movements = king.getAllPossibleMovements([3, 3]);
      expect(movements[0][0]).toBe(4);
      expect(movements[0][1]).toBe(3);
    });
  });
});
