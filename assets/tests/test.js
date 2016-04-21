var mrscraper = require("../../index.js");
var chalk = require('chalk');


/**
 * Parse and Scrape the html from a website
 * @param  {none} none
 * @return {none} none
 */
mrscraper("http://www.projectbird.com", function(response) {
  console.log(chalk.green("Getting Text for http://www.projectbird.com"));
  for (i = 0; i < response.length; i++) {
    console.log(chalk.blue(response[i]));
  }
  console.log(chalk.green("Finished !!!! Enjoy ") +chalk.red("  <3")  );
});
