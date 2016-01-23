#!/usr/bin/env node

'use strict';

var _logger = require('autocmdr/lib/logger');

var _logger2 = _interopRequireDefault(_logger);

var _help = require('autocmdr/lib/help');

var _help2 = _interopRequireDefault(_help);

var _config = require('autocmdr/lib/config');

var _config2 = _interopRequireDefault(_config);

var _package = require('autocmdr/lib/package');

var _package2 = _interopRequireDefault(_package);

var _backup = require('../cmds/backup.js');

var _backup2 = _interopRequireDefault(_backup);

var _osenv = require('osenv');

var _osenv2 = _interopRequireDefault(_osenv);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _logger2.default)(_commander2.default);
(0, _help2.default)(_commander2.default);
(0, _config2.default)(_commander2.default, { path: '' + _osenv2.default.home() + _path2.default.sep + '.simple-backup' });
(0, _package2.default)(_commander2.default, { path: '' + __dirname + _path2.default.sep + '..' + _path2.default.sep + '..' + _path2.default.sep + 'package.json' });

(0, _backup2.default)(_commander2.default);

_commander2.default.parse(process.argv);

if (_commander2.default.args.length < 1) {
  console.log('No command specified. See \'simple-backup --help\':');

  _commander2.default.outputHelp();

  process.exit(1);
}