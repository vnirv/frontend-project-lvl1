import readlineSync from 'readline-sync';
import { getRandomMinMax, getRandom } from '../src/calculator.js';
import { userName } from '../src/cli.js';
import isPrime from '../src/prime.js';

console.log('Welcome to the Brain Games!');

const name = userName();

isPrime(name);

