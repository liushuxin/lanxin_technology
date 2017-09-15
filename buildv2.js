var webpack = require('webpack');
var fs = require('fs');
var mkdirp = require('mkdirp');
var config = require('./webpack.dev.config.js');
var compiler = webpack(config);
console.log(mkdirp);
mkdirp('/tmp/foo/bar/baz', function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});
console.log("======================================================");
console.log("webpack 开始编译");
var dateStart = new Date();
console.log(dateStart.toLocaleTimeString());
console.log("======================================================");
//开始编译
compiler.run(function(err,stats){
    if(err|| stats.hasErrors()){
        var errObj = err|| stats;
        throw err;
    } 
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