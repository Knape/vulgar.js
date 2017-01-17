const fraction = require('../src/index');
const expect = require('chai').expect;

describe('Util functions', () => {
  describe('fraction to decimal', () => {
    it('should convert a string containing a fraction to a Number', () => {
      expect(fraction.toDecimal('1/2'))
      .to.equal('0.50');
    });

    it('should convert a feraction to a Number but keep the other words', () => {
      expect(fraction.toDecimal('1/2 hello'))
      .to.equal('0.50 hello');
    });
  });

  describe('vulgar to number', () => {
    it('should convert a vulgar a Number', () => {
      expect(fraction.toFraction('½'))
      .to.equal('1/2');
    });

    it('should convert ¾ to 3/4', () => {
      expect(fraction.toFraction('¾'))
      .to.equal('3/4');
    });

    it('should convert ½ 1/2 to a 1/2 1/2 and still keep the fraction', () => {
      expect(fraction.toFraction('½ 1/2'))
      .to.equal('1/2 1/2');
    });

    it('should convert "½ hello" to "1/2 hello" and still keep the word "hello"', () => {
      expect(fraction.toFraction('½ hello'))
      .to.equal('1/2 hello');
    });
  });
});
