import vulgar from './vulgar';

const convertFraction = (fraction) => {
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

export const toFraction = (string) => {
  if (string === null || typeof string === 'undefined') {
    throw new Error('Please supply a vulgar or fractal');
  }
  const stringLength = string.length;
  const newString = [];

  for (let n = 0; n < stringLength; n += 1) {
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

export const toDecimal = (fraction, onlyfraction = false, cb = null) => {
  if (fraction === null || typeof fraction === 'undefined') {
    throw new Error('Please supply a vulgar or fractal');
  }

  const parsedToFraction = toFraction(fraction);
  const regex = /((\d*)(-(\d*))?\/(\d*))/g;
  const matched = onlyfraction ? parsedToFraction.match(regex) : parsedToFraction;
  const parsed = onlyfraction
    ? matched.map(convertFraction)
    : matched.replace(regex, (_, f) => (convertFraction(f)));

  return (typeof cb === 'function' && onlyfraction) ? parsed.map(cb) : parsed;
};
