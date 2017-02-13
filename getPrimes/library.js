'use strict';

module.exports = {
  getPrimes(n) {
    if (typeof n === 'undefined') {
      return undefined;
    } else if (typeof n <= 1) {
      return 'Argument must greater than One';
    } else if ((n instanceof Array)) {
      return 'Arrays are not accepted';
    } else if (arguments.length > 1) {
      return 'Only one argument is required';
    } else if (typeof n === 'string') {
      return 'Strings are not accepted argument types';
    } else if (typeof n === 'object') {
      return 'Objects are not accepted argument types';
    } else if (typeof n !== 'number') {
      return 'Only numbers are accepted';
    } else if (n <= 1) {
      return 'Values less than 2 are not accepted, negatives included';
    } else if (n > 1) {
      const check = [];
      const allPrimes = [];
      let firstValue;
      let secondValue;

      for (firstValue = 2; firstValue <= n; firstValue += 1) {
        if (!check[firstValue]) {
          allPrimes.push(firstValue);

          /** The two options
           * Math.pow(firstValue, 2)
           * firstValue << 1
          */
          for (secondValue = firstValue << 1; secondValue <= n; secondValue += firstValue) {
            check[secondValue] = secondValue;
          }
        }
      }
      return allPrimes;
    }
  },
};
