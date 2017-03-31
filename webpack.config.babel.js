import path from 'path';
import fs from 'fs';
let basePath = 'dist/js';
import webpack from 'webpack';
// 引用这个plugin
import HtmlWebpackPlugin from 'html-webpack-plugin';
import openBrowserWebpackPlugin from 'open-browser-webpack-plugin';

let buildPath = path.resolve(__dirname,'public/javascripts');
console.log(buildPath);
let nodeModulesPath = path.resolve(__dirname,'node_modules');
let fileDirUrl ={};
  //=======
let pageDirs = fs.readdirSync(basePath);
 pageDirs.forEach(function (fileDir) {
     var pageInfo = fs.readdirSync(`${basePath}/${fileDir}`);
     pageInfo.forEach(function(file){
      fileDirUrl[fileDir] = [`${__dirname}/${basePath}/${fileDir}/${file}`];
     });
  });
console.log(fileDirUrl);
let webpackConfig = {
  entry:fileDirUrl,
  resolve: {
        extensions: ['.js', '.jsx'],
       modules: [
        "node_modules",
        path.resolve(__dirname, "dist")
      ]
    },

  module: {
    rules: [
    //使用babel-loader解析js或者jsx模块 
        { 
        test: /\.js|jsx$/, 
        use: ['babel-loader'] 
        },{// 使用css-loader解析css模块 
         test : /\.css$/,
         use : ["style-loader","css-loader"]
        },{
          test: /\.(png|jpg)$/,
          use: ['url-loader?limit=40000']
        },{
          test: /\.scss$/, 
          use: ["style-loader","css-loader","sass-loader"]
        }
    ]
    },
  devServer: { 
    inline: true,
    hot:true,
    publicPath: '/assets/',
    contentBase: path.join(__dirname, "/webpack-template/"),
    //clientLogLevel:'none',//(eg: none, error, warning or info (default))
    stats: { colors: true },
    proxy: {
      '/components': {
        target: 'http://localhost:3000/',
        secure: false
      }
    } 
  },
  output: {
    path: buildPath,
    publicPath: "/assets/",
    filename: '[name]/index.js'
  },
  plugins: [
   new webpack.NoEmitOnErrorsPlugin()
    // new HtmlWebpackPlugin({
    //     title: '开发模板页',
    //     template: path.join(__dirname, './webpack-template/index.html'),
    //     inject:'body'
    //   }),
    //new openBrowserWebpackPlugin({ url: 'http://localhost:8082' }),
  ]
};
export default webpackConfig;
module.exports = webpackConfig;