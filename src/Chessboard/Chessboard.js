import Spot from "./Spot";
import Piece from "./Piece";

export const Chessboard = () => {
  const pieceFactory = Piece();

  const getAllPossibleSpots = (pieceInput, currentSpotInput) => {
    try {
      const piece = pieceFactory.createPiece(pieceInput);
      const spot = Spot(currentSpotInput);
      const location = spot.location;
      const movements = piece
        .getAllPossibleMovements(location)
        .filter(spot => Spot.isSpotValid(spot))
        .map(spot => Spot.getLocationDisplayValue(spot));
      return movements.join(",");
    } catch (e) {
      return "invalid input";
    }
  };

  return {
    getAllPossibleSpots
  };
};
