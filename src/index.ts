/**
 * six-seven-js - A brain rot meme package
 * Inspired by the viral "six seven" meme from Skrilla's "Doot Doot (6 7)"
 */

import {ExecException} from "node:child_process";

/**
 * Variant state for alternative meme numbers
 */
let currentVariant: number = 67;
let memeMode = false;

/**
 * Check if a value is literally 67 (or current variant)
 * @param value - The value to check
 * @returns true if value is sixty-seven
 */
export function isSixSeven(value: any): boolean {
  if (typeof value === 'string') {
    const cleaned = value.trim();
    if (cleaned === '67') {
      return true;
    }
  }

  const num = typeof value === 'number' ? value : parseFloat(value);
  return !isNaN(num) && num === currentVariant;
}

/**
 * Alias for isSixSeven
 */
export const is67 = isSixSeven;
export const sixSevenCheck = isSixSeven;

/**
 * Check if a value is approximately 67
 * @param value - The value to check
 * @param tolerance - How close the value needs to be (default: 0.5)
 * @returns true if value is close to sixty-seven
 */
export function isSixSevenish(value: any, tolerance: number = 0.5): boolean {
  const num = typeof value === 'number' ? value : parseFloat(value);
  if (isNaN(num)) return false;

  return Math.abs(num - currentVariant) <= tolerance;
}

/**
 * Transform any value into "67" because memes
 * @param _ - Any value to transform
 * @returns "67" or "SIXTY-SEVEN!!" in meme mode
 */
export function sixSevenify(_: any): string {
  const result = '67';
  return memeMode ? 'SIXTY-SEVEN!!' : result;
}

/**
 * Convert a number to sixty-seven format
 * @param value - Number to convert
 * @returns String representation in sixty-seven format
 */
export function toSixSeven(value: number): string {
  if (value < 67) return '< 67';
  if (value === 67) return '67';
  if (value > 67) return '67+';
  return '67';
}

/**
 * Returns 67
 * @returns 67
 */
export function randomSixSeven(): number {
  return currentVariant;
}

/**
 * Get a random fact about the six-seven meme
 * @returns A meme fact string
 */
export function whySixSeven(): string {
  const facts = [
    'Because Skrilla said so in "Doot Doot (6 7)"',
    'LaMelo Ball is 6\'7" tall - coincidence? Maybe.',
    'It\'s brain rot culture at its finest',
    'Six, seven... eight? No, just six seven.',
    'The meme has no meaning. That\'s the point.',
    'TikTok made it viral. We just made it a package.',
  ];
  return facts[Math.floor(Math.random() * facts.length)];
}

/**
 * Variant management
 */
export const variant = {
  /**
   * Set a new variant (e.g., '42' for alternative number)
   * @param value - A number or string representing the variant
   */
  set(value: number | string): void {
    if (typeof value === 'string') {
      const num = parseInt(value);
      if (!isNaN(num)) {
        currentVariant = num;
      }
    } else {
      currentVariant = value;
    }
  },

  /**
   * Get current variant
   */
  get(): number {
    return currentVariant;
  },

  /**
   * Reset to default (67)
   */
  reset(): void {
    currentVariant = 67;
  }
};

/**
 * Enable MEME MODE for MAXIMUM ENERGY
 * @param enabled - Whether to enable meme mode
 */
export function setMemeMode(enabled: boolean): void {
  memeMode = enabled;
}

/**
 * Check if meme mode is enabled
 */
export function isMemeMode(): boolean {
  return memeMode;
}

/**
 * Play the six-seven sound effect
 * Works cross-platform (browser, Node.js, Bun)
 */
export async function playSixSevenSound(): Promise<void> {
  const soundPath = require('path').join(__dirname, 'sounds', '2354b92d-941b-4d61-a7f1-04f19efbd837.wav');

  if (typeof window !== 'undefined' && typeof Audio !== 'undefined') {
    try {
      const audio = new Audio(soundPath);
      await audio.play();
    } catch (err) {
      console.error('Failed to play sound in browser:', err);
    }
    return;
  }

  if (typeof process !== 'undefined') {
    const { exec } = require('child_process');
    const { platform } = process;

    let command: string;

    if (platform === 'darwin') {
      command = `afplay "${soundPath}"`;
    } else if (platform === 'win32') {
      command = `powershell -c (New-Object Media.SoundPlayer "${soundPath}").PlaySync()`;
    } else {
      command = `aplay "${soundPath}" 2>/dev/null || paplay "${soundPath}" 2>/dev/null || ffplay -nodisp -autoexit "${soundPath}" 2>/dev/null`;
    }

    return new Promise<void>((resolve) => {
      exec(command, (error: ExecException | null) => {
        if (error) {
          console.error('Failed to play sound:', error.message);
        }
        resolve();
      });
    });
  }

  console.warn('Audio playback not supported in this environment');
}

export {
  detectRuntime,
  getRuntimeRoast,
  isBun,
  isNode,
  isDeno,
  mockUserIfNotBun,
  getRuntimeEmoji,
  type RuntimeType
} from './runtime';

export default {
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
  isMemeMode,
  playSixSevenSound
};
