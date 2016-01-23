'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _copy = require('../modules/copy.js');

var _copy2 = _interopRequireDefault(_copy);

var _dateTime = require('../modules/dateTime.js');

var _dateTime2 = _interopRequireDefault(_dateTime);

var _pathSanitizer = require('../modules/pathSanitizer.js');

var _pathSanitizer2 = _interopRequireDefault(_pathSanitizer);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (program) {
  var newDateTime = (0, _dateTime2.default)(new Date());

  program.command('backup [source] [destination]').description('Backup a folder').action(function (source, destination) {
    var config = program.config.stores.file;
    var date = newDateTime.Y('-').m('-').d('_').H('.').M('.').S().get();

    //check to see if the config file exists
    if (_shelljs2.default.test('-f', config.file)) {
      source = typeof source === 'undefined' ? config.store.source : source;
      destination = typeof destination === 'undefined' ? config.store.destination : destination;
    }

    if (!source || !destination) {
      console.log('Either a source or a destination wasn\'t specified. See \'simple-backup --help\':');

      program.outputHelp();

      process.exit(1);
    }

    var paths = (0, _pathSanitizer2.default)(_shelljs2.default, source, destination);

    if (paths.areValid()) {
      //run the backup
      (0, _copy2.default)(_shelljs2.default, paths.source, paths.destination, date);
    }
  });
};