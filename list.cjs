var fs = require('fs');
module.exports = list = fs.readdirSync(`${__dirname}/boilerplates`);

