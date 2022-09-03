import { userName } from '../src/cli.js';
import primeGame from '../src/prime.js';

console.log('Welcome to the Brain Games!');

const name = userName();

primeGame(name);
