module.exports = function(program) {
  'use strict';

  var dateTime = require('../modules/dateTime.js')(new Date()),
    copy = require('../modules/copy.js'),
    pathSanitizer = require('../modules/pathSanitizer.js'),
    shell = require('shelljs');

  program
    .command('backup [source] [destination]')
    .description('Backup a folder')
    .action(function (source, destination) {
      var config = program.config.stores.file,
        date = dateTime.Y('-').m('-').d('_').H('.').M('.').S().get(),
        paths = {};

      //check to see if the config file exists
      if (shell.test('-f', config.file)) {
        source = (typeof source === 'undefined') ? config.store.source : source;
        destination = (typeof destination === 'undefined') ? config.store.destination : destination;
      }

      if (!source || !destination) {
        console.log('Either a source or a destination wasn\'t specified. See \'simple-backup --help\':');
        program.outputHelp();
        process.exit(1);
      }

      paths = pathSanitizer(shell, source, destination);

      if (paths.areValid()) {
        //run the backup
        copy(shell, paths.source, paths.destination, date);
      }
    });
};

