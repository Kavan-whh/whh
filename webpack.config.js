var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: __dirname + '/mock/index.js',
    output: {
        path: __dirname + "/server",
        filename: 'db.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
       contentBase: path.join(__dirname, "./server"),
       port: 9000,
   }
};
