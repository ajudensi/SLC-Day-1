'use strict';

module.exports = {
  dataTypes(arg) {
    if (typeof arg === 'string') {
      return arg.length;
    } else if (arg === null || (typeof arg === 'undefined')) {
      return 'no value';
    } else if (typeof arg === 'boolean') {
      return arg;
    } else if (typeof arg === 'number') {
      if (arg === 100) {
        return 'equal to 100';
      } else if (arg < 100) {
        return 'less than 100';
      }
      return 'more than 100';
    } else if (Array.isArray(arg)) {
      if (arg[2] !== undefined) {
        return arg[2];
      } else if (arg[2] === 'undefined') {
        return 'undefined';
      }
    } else if (typeof arg === 'function') {
      return arg(true);
    }
  },
};
