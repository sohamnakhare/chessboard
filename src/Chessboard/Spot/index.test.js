import { Spot } from "./Spot";

describe("Spot", () => {
  describe("Spot :: create", () => {
    it("should create a spot for valid cell", () => {
      const spot = Spot("A1");
      expect(spot.location[0]).toBe(1);
    });

    it("should throw error for invalid cell location", () => {
      expect(() => Spot("qwe")).toThrow();
    });

    it("should throw error for invalid cell x", () => {
      expect(() => Spot("L1")).toThrow();
    });

    it("should throw error for invalid cell y", () => {
      expect(() => Spot("L0")).toThrow();
      expect(() => Spot("La")).toThrow();
      expect(() => Spot("L9")).toThrow();
    });
  });
});
