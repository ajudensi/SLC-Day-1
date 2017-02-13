'use strict';

const jasmine = require('jasmine').expect;

const getPrimes = require('../getPrimes/library.js').getPrimes;


describe('Prime numbers to an endpoint: ', function () {
  describe('Arguments must be valid "Only one number is accepted"', function () {
    it('For n = a, should return "Strings are not accepted argument types"', function () {
      expect(getPrimes('a')).toBe('Strings are not accepted argument types');
    });

    it('should return "An argument must be supplied" if n == undefined', function () {
      expect(getPrimes()).toBeUndefined();
      expect(getPrimes(undefined)).toBeUndefined();
    });

    it('should return "Objects are not accepted argument types"', function () {
      expect(getPrimes({})).toBe('Objects are not accepted argument types');
    });

    it('should return "Only one argument is required"', function () {
      expect(arguments.length > 2).toBeLessThan(2);
      expect(getPrimes(4, 100)).toBe('Only one argument is required');
    });

    it('should return "Argument must greater than One"', function () {
      if (typeof arguments[0] !== 'undefined') {
        expect(getPrimes(arguments[0])).toBeLessThan(1);
      }
    });

    it('should return "Values less than 2 are not accepted, negatives included" if argument is less than 2', function () {
      expect(getPrimes(1)).toBe('Values less than 2 are not accepted, negatives included');
    });

    it('should "Arrays are not accepted"', function () {
      expect(getPrimes([1, 2])).toBe('Arrays are not accepted');
    });
  });


  describe('Only arrays should be returned as result containing only prime numbers less than n', function () {
    it('For n = 10, should return [ 2, 3, 5, 7 ]', function () {
      expect(getPrimes(10)).toEqual([2, 3, 5, 7]);
    });

    it('Should not contain a non-prime integer in returned array', function () {
      expect(getPrimes(20)).not.toContain(15);
    });

    it('Should not contain an integer value greater than n in returned array', function () {
      expect(getPrimes(100)).not.toContain(102);
    });
  });
});
