var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.babel.js');
for(let key in config.entry){
		if(key =="datatables"){
			config.entry[key].unshift(`webpack-dev-server/client?http://localhost:8082`,`webpack/hot/dev-server`);
		}
    
}

  // config.entry.datatables.unshift(`webpack-dev-server/client?http://localhost:8082/`);
if(process.argv[2] == 'live'){
	var compiler = webpack(config);
	console.log("live");
	var server = new WebpackDevServer(compiler,config.devServer);
	server.listen(8082);
}else if(process.argv[2] == 'pro'){
	console.log("pro");
let compiler = webpack(config,function(err, stats) {
    console.log('compiled over!')
});

}else{

}