import { userName } from '../scr/cli.js';
import evenGame from '../scr/even-game.js';

// eslint-disable-next-line no-console
console.log('Welcome to the Brain Games!');

const name = userName();

evenGame(name);
