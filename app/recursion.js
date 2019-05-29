if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    listFiles: function(data, dirName) {
      let listFiles = [];
      let dirs = [];

      function processDir(dir) {
        let file;
        let files = dir.files;

        dirs.push(dir.dir);

        for (let i = 0; i < files.length; i++) {
          file = files[i];
          if (typeof file === 'string') {
            if (!dirName || dirs.indexOf(dirName) > -1) {
              listFiles.push(files[i]);
            }
          } else {
            processDir(files[i]);
          }
        }

        dirs.pop();
      }

      processDir(data);

      return listFiles;
    },

    permute: function(arr) {
      let temp = [];
      let result = [];

      addToResult = () => {
        result.push(temp.slice());
      };

      calcPermute = () => {
        let item;
        for (let i = 0; i < arr.length; i++) {
          item = arr.splice(i, 1)[0];
          temp.push(item);
          if (arr.length) {
            calcPermute();
          } else {
            addToResult();
          }
          arr.splice(i, 0, item);
          temp.pop();
        }
        return result;
      };

      return calcPermute();
    }
  };
});
