import vulgar from './vulgar';

const convertFraction = (fraction) => {
  let result;
  let wholeNum = 0;
  let frac;
  let deci = 0;
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

export const toFraction = (string) => {
  if (string === null || typeof string === 'undefined') {
    return [];
  }
  const stringLength = string.length;
  const newString = [];

  for (let n = 0; n < stringLength; n++) {
    let s = string.charCodeAt(n).toString(16).toUpperCase();

    while (s.length < 4) {
      s = '0' + s;
    }
    s = 'u' + s;
    if (vulgar[s]) {
      const needsSpace = string.charAt(n - 1) === ' ' || n === 0 ? '' : ' ';
      newString.push(needsSpace + vulgar[s].fraction);
    } else {
      newString.push(string.charAt(n));
    }
  }

  return newString.join('');
};

export const toDecimal = (fraction) => {
  if (fraction === null || typeof fraction === 'undefined') {
    throw new Error('Please supply a fractal');
  }
  return fraction.replace(/((\d*)\/(\d*))/g, (_, f) => {
    return convertFraction(f);
  });
};
