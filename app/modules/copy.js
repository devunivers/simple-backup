'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _tmp = require('tmp');

var _tmp2 = _interopRequireDefault(_tmp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (shell, source, destination, date) {
  _tmp2.default.dir(function (err, temporary) {
    var basename = _path2.default.basename(source);
    var tmpSource = temporary + _path2.default.sep + basename;
    var finalDestination = '' + destination + _path2.default.sep + basename + '.' + date;

    if (err) {
      throw err;
    }

    console.log('copying ' + source + ' to ' + finalDestination);

    shell.cp('-Rf', source, temporary);
    shell.mv(tmpSource, finalDestination);
  });
};