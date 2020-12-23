const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack");
const path = require('path') 
const HtmlWebpackPlugin   =  require("html-webpack-plugin")

module.exports = {
    entry:"./src/main.js",
    mode:"development",
    module: { // loader 配置
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            {
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
        },{
            test: /\.png$/,
            loader: 'url-loader',
            options:{
                limit:1*1024,
                esModule:false,
                fallback:"file-loader"
            }
        }
    ]
    },
    plugins: [ // 插件配置
     
        new webpack.DefinePlugin({
            BASE_URL :"'./'"
        }),
        new HtmlWebpackPlugin({
            title:"webpack app-lucas",
            template: './public/index.html',
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        }),
   
        new VueLoaderPlugin(),

    ],
    devServer:{
        contentBase:'./public'
    },
    output: { // webpack 出口配置
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization:{
        // usedExports:true,
        // minimize:true,
        // splitChunks:{
        //     chunks:"all"
        // }
    }
}