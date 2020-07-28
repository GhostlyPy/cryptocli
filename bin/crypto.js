#!/usr/bin/env node
 // Packages used for CLI
const program = require('commander');
const pkg = require('../package.json');

// Grabs the current version from the JSON file & Adds a new command 'key' to the command list
program
    .version(pkg.version)
    .command('key', 'Manage API Key -- https://nomics.com')
    .parse(process.argv);

// Used for testing extension
// console.log('Hello from Cryptocli');