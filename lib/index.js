"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDecimal = exports.toFraction = void 0;

var _vulgar = _interopRequireDefault(require("./vulgar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const convertFraction = fraction => {
  let wholeNum = 0;
  let frac;
  let deci = 0;

  if (fraction.search('-') >= 0) {
    wholeNum = fraction.split('-');
    frac = wholeNum[1];
    wholeNum = parseInt(wholeNum, 10);
  } else {
    frac = fraction;
  }

  if (fraction.search('/') >= 0) {
    frac = frac.split('/');
    deci = parseInt(frac[0], 10) / parseInt(frac[1], 10);
  }

  const result = wholeNum + deci;
  return result.toFixed(2);
};

const match = vulgars => string => vulgars.some(v => string === v);

const toFraction = function toFraction(string) {
  let onlyfraction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (string === null || typeof string === 'undefined') {
    throw new Error('Please supply a vulgar or fractal');
  }

  const stringLength = string.length;
  const newString = [];
  const vulgars = [];

  for (let n = 0; n < stringLength; n += 1) {
    let s = string.charCodeAt(n).toString(16).toUpperCase();

    while (s.length < 4) {
      s = '0' + s;
    }

    s = 'u' + s;

    if (_vulgar.default[s]) {
      const needsSpace = string.charAt(n - 1) === ' ' || n === 0 ? '' : ' ';
      vulgars.push(_vulgar.default[s].fraction);
      newString.push(needsSpace + _vulgar.default[s].fraction);
    } else {
      newString.push(string.charAt(n));
    }
  }

  return onlyfraction ? newString.filter(match(vulgars)) : newString.join('');
};

exports.toFraction = toFraction;

const toDecimal = function toDecimal(fraction) {
  let onlyfraction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (fraction === null || typeof fraction === 'undefined') {
    throw new Error('Please supply a vulgar or fractal');
  }

  const parsedToFraction = toFraction(fraction);
  const regex = /((\d*)(-(\d*))?\/(\d*))/g;
  const matched = onlyfraction ? parsedToFraction.match(regex) : parsedToFraction;
  const parsed = onlyfraction ? matched.map(convertFraction) : matched.replace(regex, (_, f) => convertFraction(f));
  return typeof cb === 'function' && onlyfraction ? parsed.map(cb) : parsed;
};

exports.toDecimal = toDecimal;