[![Build Status](https://travis-ci.org/Knape/vulgar.js.svg?branch=master)](https://travis-ci.org/Knape/vulgar.js)

# Vulgar.js

Converting vulgar and fractions to fraction or decimals for both node and browser

## Installation

Install the package from [npm](https://npmjs.com/release)

```bash
npm install --save vulgar.js
```

## Usage

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

## Methods

At the moment vulgar.js has two methods, one for converting vulgar to fractions and one for converting either vulgar or fraction to decimal.

#### `toFraction`
Takes a string containing a vulgar and convert it to a fraction. The method will always return its original text with only the vulgar converted

#### `toDecimal`
Takes a string containing a vulgar or a fraction and convert it to a decimal. The method will always return its original text with only the vulgar or the fraction converted

## License

[MIT](LICENSE). Copyright (c) 2016 Philip Knape.
