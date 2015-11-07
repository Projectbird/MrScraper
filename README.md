

MrScraper gets the text from the website into an array.


## Install

```
$ npm install --save mrscraper
```

## Usage

```js
var mrscraper = require("./mrscraper.js");
var chalk = require('chalk');

mrscraper("http://www.tested.com", function (response) {

    console.log(chalk.blue(response));

});

```

## Team

[![Robert Gabriel](https://avatars2.githubusercontent.com/u/6218780?v=3&s=460)](http://www.projectbird.com) | 
---|---
[Robert Gabriel](http://www.projectbird.com)  |


## License

MIT © [Robert Gabriel](http://www.projectbird.com) 
