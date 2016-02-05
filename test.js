var mrscraper = require("./main.js");
var chalk = require('chalk');


mrscraper("http://www.tested.com", function (response) {

    console.log(chalk.blue(response));


});