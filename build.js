var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.babel.js');
for(let key in config.entry){
    config.entry[key].unshift(`webpack-dev-server/client?http://localhost:8081/${key}`);
}

  // config.entry.datatables.unshift(`webpack-dev-server/client?http://localhost:8082/`);

var compiler = webpack(config);
var server = new WebpackDevServer(compiler,config.devServer);
server.listen(8082);