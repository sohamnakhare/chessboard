import Errors from "../../Errors";
export const Spot = location => {
  const cellX = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
  Object.keys(cellX).forEach(cell => {
    cellX[cell.toLocaleUpperCase()] = cellX[cell];
  });

  const spotXY = location.split("");
  if (spotXY.lenght > 2) {
    throw new Error(Errors.invalidSpot);
  }

  if (!cellX[spotXY[0]]) {
    throw new Error(Errors.invalidSpot);
  }

  spotXY[0] = cellX[spotXY[0]];

  const cellY = parseInt(spotXY[1]);
  if (!cellY || cellY > 8) {
    throw new Error(Errors.invalidSpot);
  }

  const getLocationDisplayValue = spotXY => {
    return `${cellX[spotXY[0]]}${spotXY[1]}`;
  };

  return {
    location: spotXY,
    getLocationDisplayValue
  };
};
