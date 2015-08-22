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

### Unit tests:

* Command line view
  * `npm test`
* Coverage report
  * `npm run coverage`
