import Errors from "../../Errors";
import { Horse } from "./Horse";
import { King } from "./King";

export const Piece = () => {
  const createPiece = type => {
    let piece;
    switch (type) {
      case "horse": {
        piece = Horse();
        break;
      }
      case "king": {
        piece = King();
        break;
      }
      default:
        throw new Error(Errors.invalidTypeArgument);
    }

    piece.type = type;

    return piece;
  };

  return {
    createPiece
  };
};
