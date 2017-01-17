const vulgar = require('../src/index');
const expect = require('chai').expect;

describe('Util functions', () => {
  describe('vulgar to decimal', () => {
    it('should convert a string containing a vulgar to a Number', () => {
      expect(vulgar.toDecimal('1/2'))
      .to.equal('0.50');
    });

    it('should convert a feraction to a Number but keep the other words', () => {
      expect(vulgar.toDecimal('½ hello'))
      .to.equal('0.50 hello');
    });

    it('should return other as it is', () => {
      expect(vulgar.toDecimal('hello'))
      .to.equal('hello');
    });
  });

  describe('vulgar to number', () => {
    it('should convert a vulgar a Number', () => {
      expect(vulgar.toFraction('½'))
      .to.equal('1/2');
    });

    it('should convert ¾ to 3/4', () => {
      expect(vulgar.toFraction('¾'))
      .to.equal('3/4');
    });

    it('should convert ½ 1/2 to a 1/2 1/2 and still keep the vulgar', () => {
      expect(vulgar.toFraction('½ 1/2'))
      .to.equal('1/2 1/2');
    });

    it('should convert "½ hello" to "1/2 hello" and still keep the word "hello"', () => {
      expect(vulgar.toFraction('½ hello'))
      .to.equal('1/2 hello');
    });

    it('should convert a fraction a fraction', () => {
      expect(vulgar.toFraction('1/2'))
      .to.equal('1/2');
    });

    it('should return other as it is', () => {
      expect(vulgar.toFraction('hello'))
      .to.equal('hello');
    });
  });
});
