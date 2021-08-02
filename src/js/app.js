import Game, {
    GameSavingData,
    readGameSaving as loadGame,
    writeGameSaving as SaveGame
} from "./game.js";
const game = new Game();
game.start();