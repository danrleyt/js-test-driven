if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(['jquery'], function($) {
  return {
    async: function(value) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(value);
        }, 10);
      });
    },

    manipulateRemoteData: function(url) {
      return new Promise(function(resolve, reject) {
        $.get(url).then(function(data) {
          let names = [];
          let sorted = data.people.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });

          for (let p of sorted) {
            names.push(p.name);
          }
          resolve(names);
        });
      });
    }
  };
});
