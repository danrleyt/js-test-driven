if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    indexOf: function(arr, item) {
      return arr.indexOf(item);
    },

    sum: function(arr) {
      return arr.reduce((agg, curr) => agg + curr, 0);
    },

    remove: function(arr, item) {
      return arr.filter(value => value !== item);
    },

    removeWithoutCopy: function(arr, item) {
      while (arr.indexOf(item) >= 0) {
        arr.splice(arr.indexOf(item), 1);
      }
      return arr;
    },

    append: function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate: function(arr) {
      arr.pop();
      return arr;
    },

    prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail: function(arr) {
      arr.shift();
      return arr;
    },

    concat: function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count: function(arr, item) {
      let count = 0;
      arr.map(value => {
        if (value === item) count++;
      });
      return count;
    },

    duplicates: function(arr) {
      let charMap = {};
      for (let el of arr) {
        charMap[el] = charMap[el] + 1 || 1;
      }
      let result = [];
      for (let char in charMap) {
        if (charMap[char] > 1) {
          result.push(char);
        }
      }
      return result;
    },

    square: function(arr) {
      return arr.map(value => value * value);
    },

    findAllOccurrences: function(arr, target) {
      let occr = [];
      arr.map((value, index) => {
        if (value === target) {
          occr.push(index);
        }
      });
      return occr;
    }
  };
});
