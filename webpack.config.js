module.exports = {
    entry: __dirname + '/mock/index.js',
    output: {
        path: __dirname + "/server",
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
