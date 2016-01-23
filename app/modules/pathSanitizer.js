'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (shell, source, destination) {
  //strip ending slashes from the path
  function stripTrailingSlashes(path) {
    var lastChar = -1;

    if (path.slice(lastChar) === '/' && path.length > 1) {
      path = path.substring(0, path.length - 1);
    }

    return path;
  }

  return {
    source: stripTrailingSlashes(source),
    destination: stripTrailingSlashes(destination),
    areValid: function areValid() {
      var paths = [{
        'type': 'source',
        'directory': this.source
      }, {
        'type': 'destination',
        'directory': this.destination
      }];

      var arePathsValid = paths.every(function (value) {
        var directory = value.directory;
        var type = value.type;

        //check to make sure the directories exists
        if (typeof directory !== 'string') {
          console.log('You have not supplied a ' + type + ' directory.');

          return false;
        }

        if (!shell.test('-d', directory)) {
          console.log('the ' + type + ' directory: "' + directory + '" doesn\'t exist.');

          return false;
        }

        return true;
      });

      //final checks on the paths here...
      if (paths[0].directory === paths[1].directory) {
        console.log('You cannot backup the directory "' + paths[0].directory + '" to itself.');

        return false;
      }

      return arePathsValid && true;
    }
  };
};