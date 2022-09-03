#!/usr/bin/env node
import { userName } from '../src/cli.js';
import evenGame from '../src/even-game.js';

// eslint-disable-next-line no-console
console.log('Welcome to the Brain Games!');

const name = userName();

evenGame(name);
