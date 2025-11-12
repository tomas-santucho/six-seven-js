import { test } from 'node:test';
import assert from 'node:assert';
import { setMemeMode, isMemeMode, sixSevenify } from '../index';

test('isMemeMode should return false by default', () => {
  setMemeMode(false);
  assert.strictEqual(isMemeMode(), false);
});

test('setMemeMode(true) should enable meme mode', () => {
  setMemeMode(true);
  assert.strictEqual(isMemeMode(), true);
  setMemeMode(false);
});

test('setMemeMode(false) should disable meme mode', () => {
  setMemeMode(true);
  setMemeMode(false);
  assert.strictEqual(isMemeMode(), false);
});

test('sixSevenify should return "6-7" when meme mode is off', () => {
  setMemeMode(false);
  assert.strictEqual(sixSevenify(123), '6-7');
});

test('sixSevenify should return "SIX-SEVEN!!" when meme mode is on', () => {
  setMemeMode(true);
  assert.strictEqual(sixSevenify(123), 'SIX-SEVEN!!');
  setMemeMode(false);
});

test('meme mode should toggle correctly', () => {
  setMemeMode(false);
  assert.strictEqual(sixSevenify(1), '6-7');

  setMemeMode(true);
  assert.strictEqual(sixSevenify(1), 'SIX-SEVEN!!');

  setMemeMode(false);
  assert.strictEqual(sixSevenify(1), '6-7');
});

test('meme mode should persist across multiple calls', () => {
  setMemeMode(true);
  assert.strictEqual(sixSevenify(1), 'SIX-SEVEN!!');
  assert.strictEqual(sixSevenify(2), 'SIX-SEVEN!!');
  assert.strictEqual(sixSevenify(3), 'SIX-SEVEN!!');
  setMemeMode(false);
});