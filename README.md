[![Build Status](https://travis-ci.org/Knape/vulgar.js.svg?branch=master)](https://travis-ci.org/Knape/vulgar.js)

## Vulgar.js

Converting vulgar and fractions to fraction or decimals for both node and browser

Install the package from [npm](https://npmjs.com/release)

```bash
npm install --save vulgar.js
```

## Usage

Vulgar.js is a tiny util library for converting vulgars to either fractions or decimals.

```js
import vulgar from 'vulgar.js';
vulgar.toFraction('¼'); // => '1/4'
vulgar.toDecimal('¼'); // => '0.25'
```

Adding a string of text containing a vulgar will only convert that unit and return the full string

```js
import vulgar from 'vulgar.js';
vulgar.toFraction('¼ liter of water'); // => '1/4 liter of water'
vulgar.toDecimal('¼ cups of milk'); // => '0.25 cups of milk'
```

## License

[MIT](LICENSE). Copyright (c) 2016 Philip Knape.
