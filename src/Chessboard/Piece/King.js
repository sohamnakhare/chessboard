export const King = () => {
  const allowedMovementOffset = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 1],
    [-1, 1],
    [-1, -1],
    [1, -1]
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
