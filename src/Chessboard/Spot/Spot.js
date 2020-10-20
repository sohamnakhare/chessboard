import Errors from "../../Errors";
function Spot(location) {
  const spotXY = location.split("");
  if (spotXY.lenght > 2) {
    throw new Error(Errors.invalidSpot);
  }

  if (!spotX[spotXY[0]]) {
    throw new Error(Errors.invalidSpot);
  }

  spotXY[0] = spotX[spotXY[0]];

  const spotY = parseInt(spotXY[1]);
  if (!spotY || spotY > 8) {
    throw new Error(Errors.invalidSpot);
  }

  return {
    location: spotXY
  };
}

const spotX = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
Object.keys(spotX).forEach(cell => {
  spotX[cell.toUpperCase()] = spotX[cell];
});

const spotXLabel = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H"
};

Spot.spotX = spotX;
Spot.spotXLabel = spotXLabel;

Spot.getLocationDisplayValue = function(spotXY) {
  return `${this.spotXLabel[spotXY[0]]}${spotXY[1]}`;
};

Spot.isSpotValid = spotXY => {
  const x = spotXY[0];
  const y = spotXY[1];

  return x > 0 && x <= 8 && (y > 0 && y <= 8);
};

export { Spot };
