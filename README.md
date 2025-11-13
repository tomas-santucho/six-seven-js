# six-seven-js

> A brain rot meme package for JavaScript. Because sometimes you just need to know if a number is sixty-seven.

[![npm version](https://img.shields.io/npm/v/six-seven-js.svg)](https://www.npmjs.com/package/six-seven-js)
![npm downloads](https://img.shields.io/npm/dm/six-seven-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🐰 **Powered by Bun**

## What is "six seven"?

The "six seven" meme originates from **Skrilla's song "Doot Doot (6 7)"** where the lyric "6-7" gets repeated. It exploded on TikTok and Instagram Reels as a viral phrase with no fixed meaning - that's the vibe. It's absurd, slightly nonsensical, just "six seven" used as slang/meme/inside-joke.

People use it in random edits, basketball clips (LaMelo Ball is 6'7" tall), and general brain rot content. It's categorized as pure meme culture: catchy, viral, and meaningless yet fun.

This package brings that energy to JavaScript.

## Installation

```bash
bun add six-seven-js
```

### CLI Usage

```bash
bunx six-seven 7
```

## Usage

```javascript
import { isSixSeven, sixSevenify, randomSixSeven, whySixSeven, playSixSevenSound } from 'six-seven-js';

// Check if a value is literally 67
isSixSeven(67);       // true
isSixSeven('67');     // true
isSixSeven(6);        // false
isSixSeven(7);        // false
isSixSeven(67.5);     // false

// Transform anything into "67"
sixSevenify(123);     // "67"
sixSevenify("hello"); // "67"

// Get 67
randomSixSeven();     // 67

// Learn about the meme
whySixSeven();        // "Because Skrilla said so in 'Doot Doot (6 7)'"

// Play the six-seven sound (works on all platforms)
await playSixSevenSound();
```

## API

### `isSixSeven(value: any): boolean`
Check if a value is literally 67 (or current variant).

**Aliases:** `is67`, `sixSevenCheck`

```javascript
isSixSeven(67);   // true
isSixSeven('67'); // true
isSixSeven(6);    // false
isSixSeven(7);    // false
```

### `isSixSevenish(value: any, tolerance?: number): boolean`
Check if a value is approximately 67.

```javascript
isSixSevenish(67.3);     // true (within default 0.5 tolerance)
isSixSevenish(66.7);     // true
isSixSevenish(68, 1.5);  // true (custom tolerance)
```

### `sixSevenify(value: any): string`
Transform any value into "67" (because memes).

```javascript
sixSevenify(42);         // "67"
sixSevenify("anything"); // "67"
```

### `toSixSeven(value: number): string`
Convert a number to sixty-seven format.

```javascript
toSixSeven(5);   // "< 67"
toSixSeven(66);  // "< 67"
toSixSeven(67);  // "67"
toSixSeven(100); // "67+"
```

### `randomSixSeven(): number`
Returns 67.

```javascript
randomSixSeven(); // 67
```

### `whySixSeven(): string`
Get a random fact about the six-seven meme.

```javascript
whySixSeven(); // "LaMelo Ball is 6'7" tall - coincidence? Maybe."
```

### `playSixSevenSound(): Promise<void>`
Play the six-seven sound effect. Works cross-platform on browsers, Node.js, and Bun.

```javascript
await playSixSevenSound(); // Plays the sound
```

### Variant Support

Support other viral number memes:

```javascript
import { variant, isSixSeven } from 'six-seven-js';

// Switch to "42" variant
variant.set('42');
isSixSeven(42);  // true now
isSixSeven(67);  // false

// Use custom number variants
variant.set(420);
isSixSeven(420); // true
isSixSeven(67);  // false

// Reset to default
variant.reset();
isSixSeven(67);  // true again
```

### Meme Mode

ENABLE MAXIMUM ENERGY:

```javascript
import { setMemeMode, sixSevenify } from 'six-seven-js';

setMemeMode(true);
sixSevenify(123); // "SIXTY-SEVEN!!"

setMemeMode(false);
sixSevenify(123); // "67"
```

## CLI

```bash
npx six-seven 67
# Output: SIX-SEVEN!! ✨

npx six-seven 6
# Output: Not six-seven 😢

npx six-seven random
# Output: 67

npx six-seven why
# Output: Because Skrilla said so in "Doot Doot (6 7)"
```

## Why?

- It's silly and fun
- Makes devs laugh
- Good for toy logic in apps/games where "67" has meaning
- Lightweight with sound support
- Practice publishing packages
- Because brain rot culture is undefeated

## Testing

### Run the test suite:

```bash
bun test
```

The package includes 48 comprehensive unit tests covering:
- Core checking functions (isSixSeven, isSixSevenish)
- Utility functions (sixSevenify, toSixSeven, randomSixSeven)
- Variant system for alternative meme numbers
- Meme mode functionality
- Runtime detection and roasting
- All aliases and edge cases

## Contributing

PRs welcome! Add more meme variants, functions, or just make it funnier.

## License

MIT - Because sharing memes should be free.

