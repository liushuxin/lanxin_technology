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
        extensions: ['', '.js', '.jsx']
    },
  module: {
        loaders: [
            { test: /\.js|jsx$/, loaders: ['babel'] }
        ],
        include: [path.resolve(__dirname, "dist/js")],
        exclude:[nodeModulesPath]
    },
  output: {
    path: buildPath,
    publicPath: "/public/js_map/",
    filename: '[name]/index.js'
  }
};