var mrscraper = require("./mrscraper.js");
var chalk = require('chalk');


mrscraper("http://www.porn.com", function (response) {


    for (i = 0; i < response.length; i++) {
        console.log(chalk.blue(response[i]));
    }

});