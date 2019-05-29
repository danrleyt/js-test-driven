if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      let arr = [];
      for (let i = 7; i > -1; i--) {
        arr.push(num & (1 << i) ? 1 : 0);
      }
      return arr.join('');
    },

    multiply: function(a, b) {
      let digLens = b.toString().split('.')[1].length;
      return parseFloat((a * b).toPrecision(digLens));
    }
  };
});
