import { userName } from '../scr/cli.js';
import calculator from '../scr/calculator.js'

// eslint-disable-next-line no-console
console.log('Welcome to the Brain Games!');

const name = userName();

calculator(name);
