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

## License

[MIT](LICENSE). Copyright (c) 2016 Philip Knape.
