'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var vulgar = {
  'u00BD': {
    fraction: '1/2',
    vulgar: '½'
  },
  'u2153': {
    fraction: '1/3',
    vulgar: '⅓'
  },
  'u2154': {
    fraction: '2/3',
    vulgar: '⅔'
  },
  'u00BC': {
    fraction: '1/4',
    vulgar: '¼'
  },
  'u00BE': {
    fraction: '3/4',
    vulgar: '¾'
  },
  'u215B': {
    fraction: '1/8',
    vulgar: '⅛'
  },
  'U215E': {
    fraction: '7/8',
    vulgar: '⅞'
  }
};

function convertFraction(fraction) {
  var result,
      wholeNum = 0,
      frac,
      deci = 0;
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
}

var toFraction = exports.toFraction = function toFraction(string) {
  if (string === null || typeof string === 'undefined') {
    return [];
  }
  var stringLength = string.length;
  var newString = [];

  for (var n = 0; n < stringLength; n++) {
    var s = string.charCodeAt(n).toString(16).toUpperCase();

    while (s.length < 4) {
      s = '0' + s;
    }
    s = 'u' + s;
    if (vulgar[s]) {
      var needsSpace = string.charAt(n - 1) === ' ' || n === 0 ? '' : ' ';
      newString.push(needsSpace + vulgar[s].fraction);
    } else {
      newString.push(string.charAt(n));
    }
  }

  return newString.join('');
};

var toDecimal = exports.toDecimal = function toDecimal(fraction) {
  if (fraction === null || typeof fraction === 'undefined') throw 'Please supply a fractal';
  return fraction.replace(/((\d*)\/(\d*))/g, function (_, f) {
    return convertFraction(f);
  });
};
