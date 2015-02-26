#!/usr/bin/env node
'use strict';

var argv = require('yargs').argv;

var processFiles = require('../dist/index').processFiles;

processFiles(argv);
