if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    alterContext: function(fn, obj) {
      this.name = obj.name;
      this.greeting = obj.greeting;
      obj.sayIt = fn;
      return obj.sayIt();
    },

    alterObjects: function(constructor, greeting) {},

    iterate: function(obj) {}
  };
});
