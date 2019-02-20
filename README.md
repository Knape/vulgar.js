# Vulgar.js

[![Build Status](https://travis-ci.org/Knape/vulgar.js.svg?branch=master)](https://travis-ci.org/Knape/vulgar.js)
[![Coverage Status](https://coveralls.io/repos/github/Knape/vulgar.js/badge.svg?branch=master)](https://coveralls.io/github/Knape/vulgar.js?branch=master)
[![Code Climate](https://codeclimate.com/github/Knape/vulgar.js/badges/gpa.svg)](https://codeclimate.com/github/Knape/vulgar.js)

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

### `toFraction(string, [onlyFraction])`

##### `string`
Takes a string containing a vulgar and convert it to a fraction. The method will always return its original text with only the vulgar converted

##### `onlyFraction`
Optional argument, pass `true` to only return the converted decimals as an array

```js
vulgar.toFraction('¼ foo'); // => '1/4 foo'
vulgar.toFraction('¼ foo', true); // => ['1/4']
```

### `toDecimal(string, [onlyFraction], [callback])`

##### `string`
Takes a string containing a vulgar or a fraction and convert it to a decimal. The method will always return its original text with only the vulgar or the fraction converted

##### `onlyFraction`
Optional argument, pass `true` to only return the converted decimals as an array

##### `callback`
Optional argument, returns a map of each converted decimal. onlyFraction needs to be true

```js
vulgar.toDecimal('¼ foo'); // => '0.25 foo'
vulgar.toDecimal('¼ foo', true); // => ['0.25']
vulgar.toDecimal('¼ foo', true, parseFloat); // => [0.25]
```

## License

[MIT](LICENSE). Copyright (c) 2016 Philip Knape.
