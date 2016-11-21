import path from 'path';
import fs from 'fs';
let basePath = 'dist/js';
let buildPath = path.resolve(__dirname,'public/javascripts/');
let nodeModulesPath = path.resolve(__dirname,'node_modules');
let fileDirUrl ={};
  //=======
let pageDirs = fs.readdirSync(basePath);
 pageDirs.forEach(function (fileDir) {
     var pageInfo = fs.readdirSync(`${basePath}/${fileDir}`);
     pageInfo.forEach(function(file){
      fileDirUrl[fileDir] = `${__dirname}/${basePath}/${fileDir}/${file}`;
     });
  });
module.exports = {
  entry:fileDirUrl,
  resolve: {
        extensions: ['', '.js', '.jsx'],
        root: []
    },
  module: {
    
        loaders: [
        //使用babel-loader解析js或者jsx模块 
            { test: /\.js|jsx$/, loaders: ['babel'] },
            
            // 使用css-loader解析css模块 
            { test : /\.css$/, loader : 'style!css' },
            {test: /\.(png|jpg)$/,loader: 'url?limit=40000'},
            {test: /\.scss$/, loader: "style!css!sass"}],

        include: [path.resolve(__dirname, "dist")],
        exclude:[nodeModulesPath]
    },
  output: {
    path: buildPath,
    publicPath: "/public/js_map/",
    filename: '[name]/index.js'
  }
};