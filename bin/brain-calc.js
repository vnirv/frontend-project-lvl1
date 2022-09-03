#!/usr/bin/env node
import { userName } from '../src/cli.js';
import calculator from '../src/calculator.js';

console.log('Welcome to the Brain Games!');

const name = userName();

calculator(name);
