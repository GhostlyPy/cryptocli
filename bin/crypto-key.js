// Packages used for CLI 'key' command
const program = require("commander");

// Adds a new command 'set', and also adds a description and action for the command
program
	.command("set")
	.description("Set API Key -- Get at https://nomics.com")
	.action(() => console.log("Hello from set"));

program.parse(process.argv);
