// Packages used for CLI 'key' command
const program = require('commander');
const key = require('../commands/key');

// Adds a new command 'set', which sets the API key
program
	.command('set')
	.description('Set API Key -- Get at https://nomics.com')
	.action(key.set);
// Adds new command for 'show', which will show the current API key being used
program
	.command('show')
	.description('Show API Key')
	.action(key.show);
// Adds new command for 'remove', which will remove the current API key being used
program
	.command('remove')
	.description('Remove API Key')
	.action(key.remove);

program.parse(process.argv);