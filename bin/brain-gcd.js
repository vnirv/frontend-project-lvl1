import { userName } from '../src/cli.js';
import gcd from '../src/gcd.js';

// eslint-disable-next-line no-console
console.log('Welcome to the Brain Games!');

const name = userName();

gcd(name);
