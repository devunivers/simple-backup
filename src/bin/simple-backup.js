#!/usr/bin/env node
'use strict';

import autocmdrLogger from 'autocmdr/lib/logger';
import autocmdrHelp from 'autocmdr/lib/help';
import autocmdrConfig from 'autocmdr/lib/config';
import autocmdrPackage from 'autocmdr/lib/package';
import commandBackup from '../cmds/backup.js';
import osenv from 'osenv';
import path from 'path';
import program from 'commander';

autocmdrLogger(program);
autocmdrHelp(program);
autocmdrConfig(program, { path: `${osenv.home()}${path.sep}.simple-backup` });
autocmdrPackage(program, { path: `${__dirname}${path.sep}..${path.sep}..${path.sep}package.json` });

commandBackup(program);

program.parse(process.argv);

if (program.args.length < 1) {
  console.log('No command specified. See \'simple-backup --help\':');

  program.outputHelp();

  process.exit(1);
}
