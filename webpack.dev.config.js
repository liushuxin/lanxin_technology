var path = require('path');
var webpack = require('webpack');
var buildPath = path.resolve(__dirname, 'public/javascripts');
var publicPath = path.resolve(__dirname, '/javascripts');

var config = {
    entry:[path.resolve(__dirname,'dist/src/index')],
    resolve: {//如何解析模块
        alias: {//路径别名，使其import时更加直观
            component: path.resolve(__dirname, 'dist/components'),
            sass: path.resolve(__dirname, 'dist/sass')
        },
        enforceModuleExtension: false,
        descriptionFiles: ["package.json"],//指定描述报管理的json 文件。
        extensions: ['.js', '.jsx'],
        modules: [//告知webpack 应该去解析哪些文件夹，绝对和相对路径在这里都可以使用
            path.resolve(__dirname, 'dist'),
            "node_modules"
        ],
        enforceExtension: false//是否强制添加后缀
    },
    module: {
        rules: [
            //使用babel-loader解析js或者jsx模块 
            {// 使用css-loader解析css模块 
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.(png|jpg)$/,
                use: ['url-loader?limit=40000&name=/images/[hash:8].[name].[ext]']
            }, {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }, {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: ["url-loader?limit=10000"]
            }, {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: ["file-loader"]
            }
        ]
    },
    output:{
        path: buildPath,
        publicPath: publicPath,
    },
    plugins: [
    ]
}
module.exports = config;