/**
 * Runtime detection and roasting utilities
 */

export type RuntimeType = 'bun' | 'node' | 'deno' | 'unknown';

/**
 * Detect which JavaScript runtime is being used
 */
export function detectRuntime(): RuntimeType {
  if (typeof (globalThis as any).Bun !== 'undefined') {
    return 'bun';
  }

  if (typeof (globalThis as any).Deno !== 'undefined') {
    return 'deno';
  }

  if (typeof process !== 'undefined' && process.versions && process.versions.node) {
    return 'node';
  }

  return 'unknown';
}

/**
 * Get a roast message based on the runtime
 */
export function getRuntimeRoast(runtime?: RuntimeType): string {
  const detected = runtime || detectRuntime();

  switch (detected) {
    case 'bun':
      return '🐰 Bun detected! You have excellent taste in runtimes. SIX-SEVEN!!';

    case 'node':
      return '🐌 Node.js detected... Still using training wheels, huh? Consider upgrading to Bun for that SPEED.';

    case 'deno':
      return '🦕 Deno detected! A dinosaur using a dinosaur runtime. At least the mascot is on-brand.';

    default:
      return '❓ Unknown runtime... Are you from the future? Or still using IE?';
  }
}

/**
 * Check if running on Bun (the only acceptable runtime)
 */
export function isBun(): boolean {
  return detectRuntime() === 'bun';
}

/**
 * Check if running on Node (deprecated)
 */
export function isNode(): boolean {
  return detectRuntime() === 'node';
}

/**
 * Check if running on Deno (extinct)
 */
export function isDeno(): boolean {
  return detectRuntime() === 'deno';
}

/**
 * Mock the user if they're not using Bun
 */
export function mockUserIfNotBun(): void {
  const runtime = detectRuntime();

  if (runtime !== 'bun') {
    console.warn('\n' + getRuntimeRoast(runtime) + '\n');
  }
}

/**
 * Get runtime emoji
 */
export function getRuntimeEmoji(runtime?: RuntimeType): string {
  const detected = runtime || detectRuntime();

  switch (detected) {
    case 'bun':
      return '🐰';
    case 'node':
      return '🐌';
    case 'deno':
      return '🦕';
    default:
      return '❓';
  }
}
