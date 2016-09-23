/**
 * TO TEST

  ¾ oz grapefruit juice

 */


var fraction = require('./index');
var expect = require('chai').expect

describe('Util functions', function() {

  describe('fraction to decimal', function() {
    	it("should convert a string containing a fraction to a Number", function() {
      	expect(fraction.toDecimal('1/2'))
      	.to.equal('0.50');
    	})

    	it('should convert a feraction to a Number but keep the other words', function() {
      	expect(fraction.toDecimal('1/2 hello'))
      	.to.equal('0.50 hello');
    	})

  })

  describe('', function() {
    it('should convert a vulgar a Number', function() {
    	expect(fraction.toFraction('½'))
    	.to.equal('1/2');
  	})

    it('should convert a vulgar a Number', function() {
    	expect(fraction.toFraction('¾'))
    	.to.equal('3/4');
  	})

    ¼

  	it('should convert a vulgar to a Number but keep the fraction', function() {
    	expect(fraction.toFraction('½ 1/2'))
    	.to.equal('1/2 1/2');
  	})

  	it('should convert a vulgar to a Number but keep the other words', function() {
    	expect(fraction.toFraction('½ hello'))
    	.to.equal('1/2 hello');
  	})
  })

})
