import { test, expect } from 'bun:test';
import {
  sixSevenify,
  toSixSeven,
  randomSixSeven,
  whySixSeven,
  setMemeMode
} from '../index';

test('sixSevenify should return "6-7" for any input in normal mode', () => {
  expect(sixSevenify(42)).toBe('6-7');
});

test('sixSevenify should return "6-7" for string input', () => {
  expect(sixSevenify('hello')).toBe('6-7');
});

test('sixSevenify should return "6-7" for null', () => {
  expect(sixSevenify(null)).toBe('6-7');
});

test('sixSevenify should return "SIX-SEVEN!!" in meme mode', () => {
  setMemeMode(true);
  expect(sixSevenify(42)).toBe('SIX-SEVEN!!');
  setMemeMode(false); 
});

test('toSixSeven should return "< 6" for numbers less than 6', () => {
  expect(toSixSeven(5)).toBe('< 6');
  expect(toSixSeven(0)).toBe('< 6');
  expect(toSixSeven(-10)).toBe('< 6');
});

test('toSixSeven should return "6" for 6', () => {
  expect(toSixSeven(6)).toBe('6');
});

test('toSixSeven should return "7" for 7', () => {
  expect(toSixSeven(7)).toBe('7');
});

test('toSixSeven should return "6-7+" for numbers greater than 7', () => {
  expect(toSixSeven(8)).toBe('6-7+');
  expect(toSixSeven(100)).toBe('6-7+');
});

test('toSixSeven should return "6-7" for 6.5', () => {
  expect(toSixSeven(6.5)).toBe('6-7');
});

test('randomSixSeven should return either 6 or 7', () => {
  const results = new Set();
  for (let i = 0; i < 100; i++) {
    const result = randomSixSeven();
    results.add(result);
    expect(result === 6 || result === 7).toBe(true);
  }
  expect(results.has(6) || results.has(7)).toBe(true);
});

test('whySixSeven should return a string', () => {
  const result = whySixSeven();
  expect(typeof result).toBe('string');
  expect(result.length > 0).toBe(true);
});

test('whySixSeven should return one of the predefined facts', () => {
  const validFacts = [
    'Because Skrilla said so in "Doot Doot (6 7)"',
    'LaMelo Ball is 6\'7" tall - coincidence? Maybe.',
    'It\'s brain rot culture at its finest',
    'Six, seven... eight? No, just six seven.',
    'The meme has no meaning. That\'s the point.',
    'TikTok made it viral. We just made it a package.',
  ];

  const results = new Set();
  for (let i = 0; i < 50; i++) {
    const result = whySixSeven();
    results.add(result);
    expect(validFacts.includes(result)).toBe(true);
  }

  expect(results.size >= 2).toBe(true);
});