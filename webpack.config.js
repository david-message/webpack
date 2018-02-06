/**
 * Created by zw on 2017/8/21.
 */

var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:
        {
        index: path.resolve(__dirname, './src/index.js'),
        // index1: path.resolve(__dirname, './src/index2.js')
    },
    // [
    //     "./src/index.js",
    //     "webpack-dev-server/client?http://0.0.0.0:8088", // WebpackDevServer host and port
    // ],
    output: { // 输出的目录和文件名
        path: __dirname + '/dist',
        filename: "build/build.js"
    },
    /*
     source-map	在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度；
     cheap-module-source-map	在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；
     eval-source-map	使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；
     cheap-module-eval-source-map	这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；
     */
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录。默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
        historyApiFallback: true,//不跳转。在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true//实时刷新，当源文件改变时会自动刷新页面
    },
    module: {
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            {test: /\.css$/, loader: "style!css"},
            {test: /\.less$/, loader: "style!css!less"},
            //.js 文件使用 jsx-loader 来编译处理
            // {test: /\.js$/, loader: "babel-loader"},
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        // modulesDirectories: ['node_modules', './src'],  // import时到哪些地方去寻找模块
        extensions: ['.js', '.jsx'] // require的时候可以直接使用require('file')，不用require('file.js')
    },
    // resolve: {
    //     root: path.join(__dirname, "src"),
    //     modules: [
    //         path.join(__dirname, "src"),
    //         "node_modules"
    //     ],
    //     extensions: ['', '.js', '.jsx']
    // },
    plugins: [
        new webpack.BannerPlugin('This file is created by:' + new Date()),   // 生成文件时加上注释
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'production' ? 'false' : 'true')),  // magic globals, 用于打印一些调试的日志, webpack -p时会删除
        }),
        // 生成html文件
        new HtmlWebpackPlugin({
            template: 'index.html.template',
            title: '标题',
            // HtmlWebpackPlugin自己有一个favicon属性, 但用起来有点问题, 所以自己重新搞个favIcon属性
            favIcon: 'favicon.ico',
            // 自定义的属性, dev模式下要加载一些额外的js
            devMode: true,
            // chunks: ['index'/*,'index1'*/]
        }),
    ]
};