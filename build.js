var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.babel.js');

  // config.entry.datatables.unshift(`webpack-dev-server/client?http://localhost:8082/`);
if(process.argv[2] == 'live'){
	for(let key in config.entry){
			config.entry[key].unshift(`webpack-dev-server/client?http://localhost:8082`,`webpack/hot/dev-server`);
}
	var compiler = webpack(config);
	console.log("live");
	var server = new WebpackDevServer(compiler,config.devServer);
	server.listen(8082);
}else if(process.argv[2] == 'pro'){
	console.log("pro");
let compiler = webpack(config,function(err,stats){
	if(err) throw err;
	console.log(stats.toString({
    chunks: true,  // Makes the build much quieter
    colors: true    // Shows colors in the console
  }));
});

}else{

}