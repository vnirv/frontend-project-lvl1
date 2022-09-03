import { userName } from '../src/cli.js';
import missingNum from '../src/progression.js';

// eslint-disable-next-line no-console
console.log('Welcome to the Brain Games!');

const name = userName();

missingNum(name);
