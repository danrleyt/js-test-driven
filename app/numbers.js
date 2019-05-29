if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return num.toString(2)[bit];
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      return parseInt(num.toString(), 2);
    },

    multiply: function(a, b) {
      let digLens = b.toString().split('.')[1].length;
      return parseFloat((a * b).toPrecision(digLens));
    }
  };
});
