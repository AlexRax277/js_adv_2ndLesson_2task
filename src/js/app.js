import sum from './basic';
// eslint-disable-next-line no-unused-vars
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game';

console.log('worked');

console.log(sum([1, 2]));

const game = new Game();
game.start();
