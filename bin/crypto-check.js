const program = require('commander');
const check = require('../commands/check');

program
  .command('price')
  .description('Check price of coins')
  .option('--crypto <type>', 'Add specific crypocurrency type in CSV format', 'BTC,ETH,XRP')
  .option('--cur <currency>', 'Convert the current currency', 'USD')
  .action(cmd => check.price(cmd));

program.parse(process.argv);