import { test, expect } from 'bun:test';
import {
  sixSevenify,
  toSixSeven,
  randomSixSeven,
  whySixSeven,
  setMemeMode
} from '../index';

test('sixSevenify should return "67" for any input in normal mode', () => {
  expect(sixSevenify(42)).toBe('67');
});

test('sixSevenify should return "67" for string input', () => {
  expect(sixSevenify('hello')).toBe('67');
});

test('sixSevenify should return "67" for null', () => {
  expect(sixSevenify(null)).toBe('67');
});

test('sixSevenify should return "SIXTY-SEVEN!!" in meme mode', () => {
  setMemeMode(true);
  expect(sixSevenify(42)).toBe('SIXTY-SEVEN!!');
  setMemeMode(false);
});

test('toSixSeven should return "< 67" for numbers less than 67', () => {
  expect(toSixSeven(5)).toBe('< 67');
  expect(toSixSeven(0)).toBe('< 67');
  expect(toSixSeven(-10)).toBe('< 67');
  expect(toSixSeven(66)).toBe('< 67');
});

test('toSixSeven should return "67" for 67', () => {
  expect(toSixSeven(67)).toBe('67');
});

test('toSixSeven should return "67+" for numbers greater than 67', () => {
  expect(toSixSeven(68)).toBe('67+');
  expect(toSixSeven(100)).toBe('67+');
});

test('randomSixSeven should return 67', () => {
  for (let i = 0; i < 100; i++) {
    const result = randomSixSeven();
    expect(result).toBe(67);
  }
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