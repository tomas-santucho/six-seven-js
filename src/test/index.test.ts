import { test, expect } from 'bun:test';
import {
  isSixSeven,
  is67,
  sixSevenCheck,
  isSixSevenish,
} from '../index';

test('isSixSeven should return true for 67', () => {
  expect(isSixSeven(67)).toBe(true);
});

test('isSixSeven should return false for 6', () => {
  expect(isSixSeven(6)).toBe(false);
});

test('isSixSeven should return false for 7', () => {
  expect(isSixSeven(7)).toBe(false);
});

test('isSixSeven should return false for 5', () => {
  expect(isSixSeven(5)).toBe(false);
});

test('isSixSeven should return false for 8', () => {
  expect(isSixSeven(8)).toBe(false);
});

test('isSixSeven should return true for string "67"', () => {
  expect(isSixSeven('67')).toBe(true);
});

test('isSixSeven should return false for string "6"', () => {
  expect(isSixSeven('6')).toBe(false);
});

test('isSixSeven should return false for 67.5', () => {
  expect(isSixSeven(67.5)).toBe(false);
});

test('isSixSeven should return false for random strings', () => {
  expect(isSixSeven('hello')).toBe(false);
});

test('is67 should work as alias for isSixSeven', () => {
  expect(is67(67)).toBe(true);
  expect(is67(6)).toBe(false);
  expect(is67(7)).toBe(false);
  expect(is67(5)).toBe(false);
});

test('sixSevenCheck should work as alias for isSixSeven', () => {
  expect(sixSevenCheck(67)).toBe(true);
  expect(sixSevenCheck(6)).toBe(false);
  expect(sixSevenCheck(7)).toBe(false);
  expect(sixSevenCheck(5)).toBe(false);
});

test('isSixSevenish should return true for 67.3 with default tolerance', () => {
  expect(isSixSevenish(67.3)).toBe(true);
});

test('isSixSevenish should return true for 66.7 with default tolerance', () => {
  expect(isSixSevenish(66.7)).toBe(true);
});

test('isSixSevenish should return false for 68 with default tolerance', () => {
  expect(isSixSevenish(68)).toBe(false);
});

test('isSixSevenish should return true for 68 with custom tolerance', () => {
  expect(isSixSevenish(68, 1.5)).toBe(true);
});

test('isSixSevenish should return false for 65 with default tolerance', () => {
  expect(isSixSevenish(65)).toBe(false);
});

test('isSixSevenish should return true for 66.7 with default tolerance', () => {
  expect(isSixSevenish(66.7)).toBe(true);
});

test('isSixSevenish should return false for NaN', () => {
  expect(isSixSevenish('not a number')).toBe(false);
});