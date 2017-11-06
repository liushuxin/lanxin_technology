let path = require('path');
module.exports = {
  entry: ['babel-polyfill',path.resolve(__dirname,'app.js')],
    output: {
      filename: '../public/test/bundle.js'
    },
    module: {
      rules: [
        //使用babel-loader解析js或者jsx模块 
        {
          test: /\.js|jsx$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        }
     
      ]
    },
  };