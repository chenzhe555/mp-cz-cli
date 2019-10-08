#!/usr/bin/env node
const program = require('commander');

program
    .version(require('../package').version)
    .usage('<command> [options]')
    .command('init', 'init project');

program.parse(process.argv);