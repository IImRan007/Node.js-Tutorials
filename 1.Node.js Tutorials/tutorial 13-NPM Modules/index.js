const chalk = require("chalk");
const validator = require("validator");

// console.log(chalk.blue("Hello World"));
// console.log(chalk.blue.italic("Hello World"));
// console.log(chalk.blue.underline("Hello World"));
// console.log(chalk.blue.underline.inverse("Hello World"));
// console.log(chalk.greenBright.underline.inverse("True"));
// console.log(chalk.redBright.underline.inverse("False"));

const response = validator.isEmail("mohd78696321@gmail.com");

// console.log(response);
// console.log(chalk.greenBright(response));
console.log(
  response
    ? chalk.greenBright.inverse(response)
    : chalk.redBright.inverse(response)
);
