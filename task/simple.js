let webpack = require('webpack');
var fs = require('fs');
var config = require('../dist/src/base/webpack.config.test.js');
var compiler = webpack(config);
//开始编译
compiler.watch({},function(err,stats){
    if(err|| stats.hasErrors()){
        var errObj = err|| stats;
        console.log(errObj);
    }
    console.log(stats.toString({
        chunks: true,  // Makes the build much quieter
        colors: true    // Shows colors in the console
    }));
});