import { userName } from '../src/cli.js';
import calculator from '../src/calculator.js';

// eslint-disable-next-line no-console
console.log('Welcome to the Brain Games!');

const name = userName();

calculator(name);
