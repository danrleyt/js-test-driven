if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    alterContext: function(fn, obj) {
      obj.sayIt = fn;
      return obj.sayIt();
    },

    alterObjects: function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate: function(obj) {
      let props = [];
      for (let prop of Object.getOwnPropertyNames(obj)) {
        props.push(`${prop}: ${obj[prop]}`);
      }
      return props;
    }
  };
});
