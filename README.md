# six-seven-js

> A brain rot meme package for JavaScript. Because sometimes you just need to know if a number is six or seven.

[![npm version](https://img.shields.io/npm/v/six-seven-js.svg)](https://www.npmjs.com/package/six-seven-js)
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
import { isSixSeven, sixSevenify, randomSixSeven, whySixSeven } from 'six-seven-js';

// Check if a value is literally 6 or 7
isSixSeven(6);        // true
isSixSeven(7);        // true
isSixSeven(5);        // false
isSixSeven('6-7');    // true
isSixSeven(6.5);      // false

// Transform anything into "6-7"
sixSevenify(123);     // "6-7"
sixSevenify("hello"); // "6-7"

// Get a random six or seven
randomSixSeven();     // 6 or 7

// Learn about the meme
whySixSeven();        // "Because Skrilla said so in 'Doot Doot (6 7)'"
```

## API

### `isSixSeven(value: any): boolean`
Check if a value is literally 6 or 7 (or current variant).

**Aliases:** `is67`, `sixSevenCheck`

```javascript
isSixSeven(6);    // true
isSixSeven(7);    // true
isSixSeven('67'); // true
```

### `isSixSevenish(value: any, tolerance?: number): boolean`
Check if a value is approximately 6 or 7.

```javascript
isSixSevenish(6.3);     // true (within default 0.5 tolerance)
isSixSevenish(7.4);     // true
isSixSevenish(8, 1.5);  // true (custom tolerance)
```

### `sixSevenify(value: any): string`
Transform any value into "6-7" (because memes).

```javascript
sixSevenify(42);        // "6-7"
sixSevenify("anything"); // "6-7"
```

### `toSixSeven(value: number): string`
Convert a number to six-seven format.

```javascript
toSixSeven(5);   // "< 6"
toSixSeven(6);   // "6"
toSixSeven(7);   // "7"
toSixSeven(10);  // "6-7+"
```

### `randomSixSeven(): number`
Returns either 6 or 7 randomly.

```javascript
randomSixSeven(); // 6 or 7
```

### `whySixSeven(): string`
Get a random fact about the six-seven meme.

```javascript
whySixSeven(); // "LaMelo Ball is 6'7" tall - coincidence? Maybe."
```

### Variant Support

Support other viral number memes:

```javascript
import { variant, isSixSeven } from 'six-seven-js';

// Switch to "41" variant
variant.set('41');
isSixSeven(41);  // true now

// Use custom variants
variant.set([4, 20]);
isSixSeven(420); // false
isSixSeven(4);   // true
isSixSeven(20);  // true

// Reset to default
variant.reset();
isSixSeven(6);   // true again
```

### Meme Mode

ENABLE MAXIMUM ENERGY:

```javascript
import { setMemeMode, sixSevenify } from 'six-seven-js';

setMemeMode(true);
sixSevenify(123); // "SIX-SEVEN!!"

setMemeMode(false);
sixSevenify(123); // "6-7"
```

## CLI

```bash
npx six-seven 6
# Output: SIX-SEVEN!! ✨

npx six-seven 8
# Output: Not six-seven 😢

npx six-seven random
# Output: 7 (or 6)

npx six-seven why
# Output: Because Skrilla said so in "Doot Doot (6 7)"
```

## Why?

- It's silly and fun
- Makes devs laugh
- Good for toy logic in apps/games where "6-7" has meaning
- Lightweight
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

