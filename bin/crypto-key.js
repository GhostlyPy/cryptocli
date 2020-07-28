// Packages used for CLI 'key' command
const program = require("commander");

// Adds a new command 'set', and also adds a description and action for the command
program
	.command("set")
	.description("Set API Key -- Get at https://nomics.com")
	.action(() => console.log("Hello from set"));

program
	.command("show")
	.description("Show API Key")
	.action(() => console.log("Hello from show"));

program
	.command("remove")
	.description("Remove API Key")
	.action(() => console.log("Hello from remove"));

program.parse(process.argv);