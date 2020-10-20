export const Horse = () => {
  const allowedMovementOffset = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1]
  ];

  const getAllPossibleMovements = currentSpot => {
    return allowedMovementOffset.map(offset => {
      return [currentSpot[0] + offset[0], currentSpot[1] + offset[1]];
    });
  };

  return {
    getAllPossibleMovements
  };
};
