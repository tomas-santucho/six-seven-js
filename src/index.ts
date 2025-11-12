/**
 * six-seven-js - A brain rot meme package
 * Inspired by the viral "six seven" meme from Skrilla's "Doot Doot (6 7)"
 */

/**
 * Variant state for alternative meme numbers
 */
let currentVariant: number[] = [6, 7];
let memeMode = false;

/**
 * Check if a value is literally 6 or 7 (or current variant)
 * @param value - The value to check
 * @returns true if value is six or seven
 */
export function isSixSeven(value: any): boolean {
  if (typeof value === 'string') {
    const cleaned = value.trim();
    if (cleaned === '6-7' || cleaned === '67') {
      return true;
    }
  }

  const num = typeof value === 'number' ? value : parseFloat(value);
  return !isNaN(num) && currentVariant.includes(num);
}

/**
 * Alias for isSixSeven
 */
export const is67 = isSixSeven;
export const sixSevenCheck = isSixSeven;

/**
 * Check if a value is approximately 6 or 7
 * @param value - The value to check
 * @param tolerance - How close the value needs to be (default: 0.5)
 * @returns true if value is close to six or seven
 */
export function isSixSevenish(value: any, tolerance: number = 0.5): boolean {
  const num = typeof value === 'number' ? value : parseFloat(value);
  if (isNaN(num)) return false;

  return currentVariant.some(target =>
    Math.abs(num - target) <= tolerance
  );
}

/**
 * Transform any value into "6-7" because memes
 * @param value - Any value to transform
 * @returns "6-7" or "SIX-SEVEN!!" in meme mode
 */
export function sixSevenify(value: any): string {
  const result = '6-7';
  return memeMode ? 'SIX-SEVEN!!' : result;
}

/**
 * Convert a number to six-seven format
 * @param value - Number to convert
 * @returns String representation in six-seven format
 */
export function toSixSeven(value: number): string {
  if (value < 6) return '< 6';
  if (value === 6) return '6';
  if (value === 7) return '7';
  if (value > 7) return '6-7+';
  return '6-7';
}

/**
 * Returns either 6 or 7 randomly
 * @returns 6 or 7
 */
export function randomSixSeven(): number {
  const [first, second] = currentVariant;
  return Math.random() < 0.5 ? first : second;
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
   * Set a new variant (e.g., '41' for the follow-up meme)
   * @param values - Array of numbers or a string like '41'
   */
  set(values: number[] | string): void {
    if (typeof values === 'string') {
      // Parse strings like '41' or '6-7'
      if (values.includes('-')) {
        // Handle hyphenated format like "6-7"
        const parts = values.split('-').map(Number);
        currentVariant = parts.filter(n => !isNaN(n));
      } else if (values.length === 2 && values[0] !== '0') {
        // Two-character strings like "41" are treated as meme variants [4, 1]
        // (but "01" or similar would be treated as single numbers)
        const digits = values.split('').map(Number);
        if (digits.every(n => !isNaN(n))) {
          currentVariant = digits;
        } else {
          // If not all digits, parse as single number
          const num = parseInt(values);
          if (!isNaN(num)) {
            currentVariant = [num];
          }
        }
      } else {
        // Any other string: parse as a single number
        const num = parseInt(values);
        if (!isNaN(num)) {
          currentVariant = [num];
        }
      }
    } else {
      currentVariant = values;
    }
  },

  /**
   * Get current variant
   */
  get(): number[] {
    return [...currentVariant];
  },

  /**
   * Reset to default (6, 7)
   */
  reset(): void {
    currentVariant = [6, 7];
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
  isMemeMode
};
