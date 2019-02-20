const vulgar = require('../src/index');

describe('Util functions', () => {
  describe('vulgar to decimal', () => {
    test('should convert a string containing a vulgar to a Decimal', () => {
      expect(vulgar.toDecimal('1/2'))
      .toEqual('0.50');
    });

    test('should convert a string containing a full number and a vulgar to a Decimal', () => {
      expect(vulgar.toDecimal('1-1/2'))
      .toEqual('1.50');
    });

    test('should convert a string containing a full number and a vulgar to a Decimal', () => {
      expect(vulgar.toDecimal('1-2/2'))
      .toEqual('2.00');
    });

    test('should convert a fraction to a Decimal', () => {
      expect(vulgar.toDecimal('⅚'))
      .toEqual('0.83');
    });

    test('should convert a fraction to a Decimal but keep the other words', () => {
      expect(vulgar.toDecimal('½ hello'))
      .toEqual('0.50 hello');
    });

    test('should convert a fraction to a Decimal but keep the other words', () => {
      expect(vulgar.toDecimal('¼ cups of milk'))
      .toEqual('0.25 cups of milk');
    });

    test('should return other as it is', () => {
      expect(vulgar.toDecimal('hello'))
      .toEqual('hello');
    });

    test('should throw an error if we dont pass a string to the method', () => {
      expect(() => vulgar.toDecimal())
      .toThrow('Please supply a vulgar or fractal');
    });

    test('should convert a fraction to a decimal and only return it as an array', () => {
      expect(vulgar.toDecimal('½ hello', true))
      .toEqual(['0.50']);
    });

    test('should convert a fractions to decimals but return them as an array', () => {
      expect(vulgar.toDecimal('½ ¼', true))
      .toEqual(['0.50', '0.25']);
    });

    test('should convert a fractions to decimals and handle callback', () => {
      expect(vulgar.toDecimal('½ ¼', true, n => parseFloat(n, 10)))
      .toEqual([0.50, 0.25]);
    });

    test('should convert a string containing a full number and a vulgar to a Decimal', () => {
      expect(vulgar.toDecimal('1-2/2', true, n => parseInt(n, 10)))
      .toEqual([2]);
    });

    test('should convert a string containing a full number and a vulgar to a Decimal', () => {
      expect(vulgar.toDecimal('1-2/2', false, n => parseInt(n, 10)))
      .toEqual('2.00');
    });
  });

  describe('vulgar to number', () => {
    test('should convert a vulgar a Number', () => {
      expect(vulgar.toFraction('½'))
      .toEqual('1/2');
    });

    test('should convert ¾ to 3/4', () => {
      expect(vulgar.toFraction('¾'))
      .toEqual('3/4');
    });

    test('should convert ½ 1/2 to a 1/2 1/2 and still keep the vulgar', () => {
      expect(vulgar.toFraction('½ 1/2'))
      .toEqual('1/2 1/2');
    });

    test('should convert "½ liter of water" to "1/2 liter of water" and still keep the word "liter of water"', () => {
      expect(vulgar.toFraction('½ liter of water'))
      .toEqual('1/2 liter of water');
    });

    test('should convert a fraction to a fraction', () => {
      expect(vulgar.toFraction('1/2'))
      .toEqual('1/2');
    });

    test('should convert "½ liter of water" to "1/2" and only return fraction as array', () => {
      expect(vulgar.toFraction('½ liter of water', true))
      .toEqual(['1/2']);
    });

    test('should convert "½ and ½ liter of water" to "1/2 1/2" and only return fraction as array', () => {
      expect(vulgar.toFraction('½ and ½ liter of water', true))
      .toEqual(['1/2', '1/2']);
    });

    test('should return other as it is', () => {
      expect(vulgar.toFraction('hello'))
      .toEqual('hello');
    });

    test('should throw an error if we dont pass a string to the method', () => {
      expect(() => vulgar.toFraction())
      .toThrow('Please supply a vulgar or fractal');
    });
  });
});
