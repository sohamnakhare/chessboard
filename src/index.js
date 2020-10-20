import Chessboard from "./Chessboard";

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter your input ? ", function(input) {
  const pieceSpotInput = input.split(" ");
  const pieceInput = pieceSpotInput[0];
  const spotInput = pieceSpotInput[1];
  const chessboard = Chessboard();

  const possibleMoves = chessboard.getAllPossibleSpots(
    pieceInput.toLowerCase(),
    spotInput
  );

  console.log(possibleMoves);
  rl.close();
});

rl.on("close", function() {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
