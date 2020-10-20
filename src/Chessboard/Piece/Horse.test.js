import { Horse } from "./Horse";

describe("Horse", () => {
  describe("Horse :: getAllPossibleMovements", () => {
    it("should return all the possible postion based on the current position", () => {
      const horse = Horse();
      const movements = horse.getAllPossibleMovements([3, 3]);
      expect(movements[0][0]).toBe(1);
      expect(movements[0][1]).toBe(2);
    });
  });
});
