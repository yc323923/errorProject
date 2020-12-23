const common = require('./webpack.common')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { merge } = require("webpack-merge")
const path = require('path') 

module.exports = merge(common,{
    mode:"production",
    plugins:[
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(
            {patterns:
                [{
                    from:  path.resolve(__dirname, "public/favicon.ico"),
                    to:  path.resolve(__dirname, "dist"),
                }]
            
            })
    ]
}) 