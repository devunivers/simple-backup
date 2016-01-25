simple-backup
=============

### About

A simple script to backup a directory and timestamp it.

### Installation:

* [Download and install](https://nodejs.org/download/) Node.js
* `npm install -g simple-backup`

### Usage:

#### Setup a config file (optional)

* `simple-backup config source ~/files-to-backup`
* `simple-backup config destination ~/place-to-keep-backups`

#### Run with the config file

* `simple-backup backup`

#### Run without a config file
* `simple-backup backup ~/files-to-backup ~/place-to-keep-backups`

### Development:

* Clone the repo:
  * `git clone https://github.com/kherrick/simple-backup`
* Install the dependencies:
  * `npm install`
* Build the project:
  * `npm run build`
* Watch for changes and build:
  * `npm run watch`
* Lint the source and unit tests:
  * `npm run lint`
* Run unit tests on the command line:
  * `npm run test`
* Run unit tests with a coverage report:
  * `npm run coverage`

[![Build Status](https://travis-ci.org/kherrick/simple-backup.svg?branch=master)](https://travis-ci.org/kherrick/simple-backup)
