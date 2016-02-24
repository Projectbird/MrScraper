var mrscraper = require("./mrscraper.js");
var chalk = require('chalk');


mrscraper("http://www.porn.com", function (response) {

    console.log(chalk.blue(response));


});