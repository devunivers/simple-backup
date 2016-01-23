import copy from '../modules/copy.js';
import dateTime from '../modules/dateTime.js';
import pathSanitizer from '../modules/pathSanitizer.js';
import shell from 'shelljs';

export default (program) => {
  const newDateTime = dateTime(new Date());

  program.command('backup [source] [destination]').description('Backup a folder').action(
      (source, destination) => {
        const config = program.config.stores.file;
        const date = newDateTime.Y('-').m('-').d('_').H('.').M('.').S().get();

        //check to see if the config file exists
        if (shell.test('-f', config.file)) {
          source = typeof source === 'undefined' ? config.store.source : source;
          destination = typeof destination === 'undefined' ? config.store.destination : destination;
        }

        if (!source || !destination) {
          console.log('Either a source or a destination wasn\'t specified. See \'simple-backup --help\':');

          program.outputHelp();

          process.exit(1);
        }

        const paths = pathSanitizer(shell, source, destination);

        if (paths.areValid()) {
          //run the backup
          copy(shell, paths.source, paths.destination, date);
        }
      }
  );
};
