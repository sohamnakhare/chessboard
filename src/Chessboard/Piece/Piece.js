import Errors from "../../Errors";
import { Horse } from "./Horse";
import { King } from "./King";

export const Piece = () => {
  const createPiece = (type, currentPosition) => {
    let piece;
    switch (type) {
      case "horse": {
        piece = Horse(currentPosition);

        break;
      }
      case "king": {
        piece = King(currentPosition);
        break;
      }
      default:
        throw new InvalidOperationException(Errors.invalidTypeArgument);
    }

    piece.type = type;

    return piece;
  };

  return {
    createPiece
  };
};
