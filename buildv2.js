var webpack = require('webpack');
var fs = require('fs');
var mkdirp = require('mkdirp');
var config = require('./webpack.dev.config.js');
var compiler = webpack(config);
// mkdirp('./tmp/foo/bar/baz.js', function (err) {
//     if (err) console.error(err)
//     else console.log('pow!')
// });
console.log("======================================================");
console.log("webpack 开始编译");
var dateStart = new Date();
console.log(dateStart.toLocaleTimeString());
console.log("======================================================");
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
    fs.writeFile(
        './stats.json',
        JSON.stringify(stats.toJson({all:true})),
        () => {}
      );

    console.log("======================================================");
    console.log("webpack 编译结束");
    var dateEnd = new Date();
    console.log(dateEnd.toLocaleTimeString());
    console.log("======================================================");
    console.log("======================================================");
    console.log("webpack 共用时%s秒",(dateEnd - dateStart)/1000);
    console.log("======================================================");

});