import { test, expect } from 'bun:test';
import { isSixSeven, variant } from '../index';

test('variant.get should return default [6, 7]', () => {
  variant.reset();
  const current = variant.get();
  expect(current).toEqual([6, 7]);
});

test('variant.set with string "41" should change to [4, 1]', () => {
  variant.set('41');
  const current = variant.get();
  expect(current).toEqual([4, 1]);
  variant.reset();
});

test('isSixSeven should work with variant "41"', () => {
  variant.set('41');
  assert.strictEqual(isSixSeven(4), true);
  assert.strictEqual(isSixSeven(1), true);
  assert.strictEqual(isSixSeven(6), false);
  assert.strictEqual(isSixSeven(7), false);
  variant.reset();
});

test('variant.set with array should work', () => {
  variant.set([4, 20]);
  const current = variant.get();
  expect(current).toEqual([4, 20]);
  variant.reset();
});

test('isSixSeven should work with custom array variant', () => {
  variant.set([4, 20]);
  assert.strictEqual(isSixSeven(4), true);
  assert.strictEqual(isSixSeven(20), true);
  assert.strictEqual(isSixSeven(6), false);
  assert.strictEqual(isSixSeven(7), false);
  variant.reset();
});

test('variant.set with string "6-7" should parse correctly', () => {
  variant.set('6-7');
  const current = variant.get();
  expect(current).toEqual([6, 7]);
  variant.reset();
});

test('variant.set with 3+ digit string should work as single number', () => {
  variant.set('420');
  const current = variant.get();
  expect(current).toEqual([420]);
  variant.reset();
});

test('isSixSeven should work with 3+ digit variant', () => {
  variant.set('420');
  assert.strictEqual(isSixSeven(420), true);
  assert.strictEqual(isSixSeven(6), false);
  assert.strictEqual(isSixSeven(7), false);
  variant.reset();
});

test('variant.reset should restore default [6, 7]', () => {
  variant.set([1, 2, 3]);
  variant.reset();
  const current = variant.get();
  expect(current).toEqual([6, 7]);
});

test('variant.get should return a copy (not modify original)', () => {
  variant.reset();
  const current = variant.get();
  current.push(999);
  const newGet = variant.get();
  expect(newGet).toEqual([6, 7]);
});

test('variant should persist across multiple checks', () => {
  variant.set('13');
  assert.strictEqual(isSixSeven(1), true);
  assert.strictEqual(isSixSeven(3), true);
  assert.strictEqual(isSixSeven(1), true); // Second check
  assert.strictEqual(isSixSeven(6), false);
  variant.reset();
});
