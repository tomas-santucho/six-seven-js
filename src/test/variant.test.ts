import { test, expect } from 'bun:test';
import { isSixSeven, variant } from '../index';

test('variant.get should return default 67', () => {
  variant.reset();
  const current = variant.get();
  expect(current).toEqual(67);
});

test('variant.set with string "41" should change to 41', () => {
  variant.set('41');
  const current = variant.get();
  expect(current).toEqual(41);
  variant.reset();
});

test('isSixSeven should work with variant "41"', () => {
  variant.set('41');
  expect(isSixSeven(41)).toBe(true);
  expect(isSixSeven(4)).toBe(false);
  expect(isSixSeven(1)).toBe(false);
  expect(isSixSeven(67)).toBe(false);
  variant.reset();
});

test('variant.set with number should work', () => {
  variant.set(420);
  const current = variant.get();
  expect(current).toEqual(420);
  variant.reset();
});

test('isSixSeven should work with custom numeric variant', () => {
  variant.set(420);
  expect(isSixSeven(420)).toBe(true);
  expect(isSixSeven(6)).toBe(false);
  expect(isSixSeven(7)).toBe(false);
  expect(isSixSeven(67)).toBe(false);
  variant.reset();
});

test('variant.set with string should parse correctly', () => {
  variant.set('42');
  const current = variant.get();
  expect(current).toEqual(42);
  variant.reset();
});

test('isSixSeven should work with string variant', () => {
  variant.set('420');
  expect(isSixSeven(420)).toBe(true);
  expect(isSixSeven(6)).toBe(false);
  expect(isSixSeven(7)).toBe(false);
  expect(isSixSeven(67)).toBe(false);
  variant.reset();
});

test('variant.reset should restore default 67', () => {
  variant.set(123);
  variant.reset();
  const current = variant.get();
  expect(current).toEqual(67);
});

test('variant should persist across multiple checks', () => {
  variant.set(13);
  expect(isSixSeven(13)).toBe(true);
  expect(isSixSeven(13)).toBe(true); // Second check
  expect(isSixSeven(67)).toBe(false);
  expect(isSixSeven(6)).toBe(false);
  variant.reset();
});
