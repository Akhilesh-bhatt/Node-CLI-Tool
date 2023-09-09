const chalk = require('chalk');

module.exports = function start(config) {
  console.log(chalk.bgCyanBright(" Starting the app "));
  console.log(chalk.gray("Recieved configiration in start- ", config));
}