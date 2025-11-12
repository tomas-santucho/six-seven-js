import { test, expect } from 'bun:test';
import {
  isSixSeven,
  is67,
  sixSevenCheck,
  isSixSevenish,
  sixSevenify,
  toSixSeven,
  randomSixSeven,
  whySixSeven,
  variant,
  setMemeMode,
  isMemeMode
} from '../index';

test('isSixSeven should return true for 6', () => {
  expect(isSixSeven(6)).toBe(true);
});

test('isSixSeven should return true for 7', () => {
  expect(isSixSeven(7)).toBe(true);
});

test('isSixSeven should return false for 5', () => {
  expect(isSixSeven(5)).toBe(false);
});

test('isSixSeven should return false for 8', () => {
  expect(isSixSeven(8)).toBe(false);
});

test('isSixSeven should return true for string "6-7"', () => {
  expect(isSixSeven('6-7')).toBe(true);
});

test('isSixSeven should return true for string "67"', () => {
  expect(isSixSeven('67')).toBe(true);
});

test('isSixSeven should return true for string "6"', () => {
  expect(isSixSeven('6')).toBe(true);
});

test('isSixSeven should return false for 6.5', () => {
  expect(isSixSeven(6.5)).toBe(false);
});

test('isSixSeven should return false for random strings', () => {
  expect(isSixSeven('hello')).toBe(false);
});

test('is67 should work as alias for isSixSeven', () => {
  expect(is67(6)).toBe(true);
  expect(is67(7)).toBe(true);
  expect(is67(5)).toBe(false);
});

test('sixSevenCheck should work as alias for isSixSeven', () => {
  expect(sixSevenCheck(6)).toBe(true);
  expect(sixSevenCheck(7)).toBe(true);
  expect(sixSevenCheck(5)).toBe(false);
});

test('isSixSevenish should return true for 6.3 with default tolerance', () => {
  expect(isSixSevenish(6.3)).toBe(true);
});

test('isSixSevenish should return true for 7.4 with default tolerance', () => {
  expect(isSixSevenish(7.4)).toBe(true);
});

test('isSixSevenish should return false for 8 with default tolerance', () => {
  expect(isSixSevenish(8)).toBe(false);
});

test('isSixSevenish should return true for 8 with custom tolerance', () => {
  expect(isSixSevenish(8, 1.5)).toBe(true);
});

test('isSixSevenish should return false for 5 with default tolerance', () => {
  expect(isSixSevenish(5)).toBe(false);
});

test('isSixSevenish should return true for 5.7 with default tolerance', () => {
  expect(isSixSevenish(5.7)).toBe(true);
});

test('isSixSevenish should return false for NaN', () => {
  expect(isSixSevenish('not a number')).toBe(false);
});