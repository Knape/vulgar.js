'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDecimal = exports.toFraction = undefined;

var _vulgar = require('./vulgar');

var _vulgar2 = _interopRequireDefault(_vulgar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertFraction = function convertFraction(fraction) {
  var result = void 0;
  var wholeNum = 0;
  var frac = void 0;
  var deci = 0;
  if (fraction.search('/') >= 0) {
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
    result = wholeNum + deci;
  } else {
    result = +fraction;
  }
  return result.toFixed(2);
};

var toFraction = exports.toFraction = function toFraction(string) {
  if (string === null || typeof string === 'undefined') {
    throw new Error('Please supply a vulgar or fractal');
  }
  var stringLength = string.length;
  var newString = [];

  for (var n = 0; n < stringLength; n++) {
    var s = string.charCodeAt(n).toString(16).toUpperCase();

    while (s.length < 4) {
      s = '0' + s;
    }
    s = 'u' + s;
    if (_vulgar2.default[s]) {
      var needsSpace = string.charAt(n - 1) === ' ' || n === 0 ? '' : ' ';
      newString.push(needsSpace + _vulgar2.default[s].fraction);
    } else {
      newString.push(string.charAt(n));
    }
  }

  return newString.join('');
};

var toDecimal = exports.toDecimal = function toDecimal(fraction) {
  if (fraction === null || typeof fraction === 'undefined') {
    throw new Error('Please supply a vulgar or fractal');
  }
  var parsedToFraction = toFraction(fraction);
  return parsedToFraction.replace(/((\d*)\/(\d*))/g, function (_, f) {
    return convertFraction(f);
  });
};