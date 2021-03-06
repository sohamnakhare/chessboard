import { Spot } from "./Spot";

describe("Spot", () => {
  describe("Spot :: create", () => {
    it("should create a spot for valid cell", () => {
      const spot = Spot("A1");
      expect(spot.location[0]).toBe(1);
    });

    it("should create a spot for valid cell with lowercase X value", () => {
      const spot = Spot("a1");
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

  describe("Spot  ::  getLocationDisplayValue", ()=>{
    const displayValue = Spot.getLocationDisplayValue([1,8]);
    expect(displayValue).toBe("A8");
  });

  describe("Spot  ::  isSpotValid", ()=>{
    expect(Spot.isSpotValid([1,8])).toBe(true);
    expect(Spot.isSpotValid([0,7])).toBe(false);
    expect(Spot.isSpotValid([1,9])).toBe(false);
  });
});
