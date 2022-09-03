#!/usr/bin/env node
import { userName } from '../src/cli.js';
import gcd from '../src/gcd.js';

console.log('Welcome to the Brain Games!');

const name = userName();

gcd(name);
