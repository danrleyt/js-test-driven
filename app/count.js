if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    count: function(start, end) {
      let finishNow = false;

      const consoleTime = () => {
        if (start > end || finishNow) {
          clearInterval(this);
          return;
        }
        console.log(start);
        start += 1;
      };

      setInterval(consoleTime, 100);

      function cancel() {
        finishNow = true;
      }

      const obj = {
        cancel
      };

      return obj;
    }
  };
});
