var chalk = require('chalk');

var message = chalk.blue.bold('Hello ',) + chalk.underline.bgBlue('World');
console.log(message)
