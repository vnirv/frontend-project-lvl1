import { userName } from '../scr/cli.js';
import gcd from '../scr/gcd.js';

// eslint-disable-next-line no-console
console.log('Welcome to the Brain Games!');

const name = userName();

gcd(name);
