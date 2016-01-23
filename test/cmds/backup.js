'use strict';

import assert from 'assert';
import path from 'path';
import { exec } from 'child_process';

describe('simple-backup', () => {
  const cmd = `node_modules/.bin/babel-node ${path.join(__dirname, '../../src/bin/simple-backup')} `;

  it('--help should run without errors', () => {
    exec(`${cmd} --help`, (error) => {
      assert(!error);
    });
  });

  it('--version should run without errors', () => {
    exec(`${cmd} --version`, (error) => {
      assert(!error);
    });
  });

  it('should return error on missing command', () => {
    exec(cmd, (error) => {
      assert(error);
      assert.equal(error.code, 1);
    });
  });

  it('should return error on unknown command', () => {
    exec(`${cmd} junkcmd`, (error) => {
      assert(error);
      assert.equal(error.code, 1);
    });
  });
});
