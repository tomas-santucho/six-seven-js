#!/usr/bin/env node

import { isSixSeven, randomSixSeven, whySixSeven, detectRuntime, getRuntimeRoast } from './index';

const runtime = detectRuntime();
if (runtime !== 'bun') {
  console.warn('\n' + getRuntimeRoast(runtime) + '\n');
}

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: six-seven <number|random|why|runtime>');
  console.log('Examples:');
  console.log('  six-seven 6');
  console.log('  six-seven 7');
  console.log('  six-seven random');
  console.log('  six-seven why');
  console.log('  six-seven runtime  # Check your runtime');
  process.exit(0);
}

const input = args[0].toLowerCase();

if (input === 'random') {
  const result = randomSixSeven();
  console.log(`${result}`);
  process.exit(0);
}

if (input === 'why') {
  console.log(whySixSeven());
  process.exit(0);
}

if (input === 'runtime') {
  console.log(getRuntimeRoast());
  process.exit(0);
}

const value = parseFloat(input);

if (isNaN(value)) {
  console.log('Invalid input. Please provide a number, "random", or "why".');
  process.exit(1);
}

if (isSixSeven(value)) {
  console.log('SIX-SEVEN!! ✨');
  process.exit(0);
} else {
  console.log('Not six-seven 😢');
  process.exit(0);
}
