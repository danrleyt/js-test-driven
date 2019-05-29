if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    argsAsArray: function(fn, arr) {
      return fn(...arr);
    },

    speak: function(fn, obj) {
      obj.speak = fn;
      return obj.speak();
    },

    functionFunction: function(str) {
      this.str = str;
      return function(name) {
        return str + ', ' + name;
      };
    },

    makeClosures: function(arr, fn) {
      let funcs = [];
      arr.map(value => {
        funcs.push(function() {
          return fn(value);
        });
      });
      return funcs;
    },

    partial: function(fn, str1, str2) {
      return fn.bind(null, str1, str2);
    },

    useArguments: function() {
      let sum = 0;
      for (let arg of arguments) {
        sum += arg;
      }
      return sum;
    },

    callIt: function(fn) {},

    partialUsingArguments: function(fn) {},

    curryIt: function(fn) {}
  };
});
