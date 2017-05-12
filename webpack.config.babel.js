var path = require('path');
var fs = require('fs');
let basePath = 'dist/js';
var webpack = require('webpack');
// 引用这个plugin

let buildPath = path.resolve(__dirname,'public/javascripts');
console.log("buildpath:"+buildPath);
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
console.log("preCompileFileList:");
console.log(fileDirUrl);

let webpackConfig = {
  entry:fileDirUrl,
  resolve: {//如何解析模块
      alias:{//路径别名，使其import时更加直观
        component:path.resolve(__dirname,'dist/components')
      },
      enforceModuleExtension: false,
      descriptionFiles:["package.json"],//指定描述报管理的json 文件。
      extensions: ['.js', '.jsx'],
      modules: [//告知webpack 应该去解析哪些文件夹，绝对和相对路径在这里都可以使用
      path.resolve(__dirname,'dist'),
        "node_modules"
      ],
      enforceExtension:false//是否强制添加后缀
  },
    devtool:"source-map",
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
      '/getData': {
        target: 'http://localhost:3000/',
        secure: false
      },
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
   new webpack.HotModuleReplacementPlugin(),
   new webpack.NoEmitOnErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      htmlLoader: {
       whateverProp: true
      }
    }
  })
  ]
};
module.exports= webpackConfig;
// module.exports = webpackConfig;