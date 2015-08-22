module.exports = function(shell, source, destination, date) {
  'use strict';

  var path = require('path'),
    tmp = require('tmp'),
    basename = path.basename(source);

  tmp.dir(function (err, temporary) {
    var tmpSource = temporary + path.sep + basename,
      finalDestination = destination + path.sep + basename + '.' + date;

    if (err) {
      throw err;
    }

    console.log('copying ' + source + ' to ' + finalDestination);

    shell.cp('-Rf', source, temporary);
    shell.mv(tmpSource, finalDestination);
  });
};
