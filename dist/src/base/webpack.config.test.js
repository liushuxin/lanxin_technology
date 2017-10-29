let path = require('path');
module.exports = {
    entry: path.resolve(__dirname,'app.js'),
    output: {
      filename: '../public/test/bundle.js'
    }
  };