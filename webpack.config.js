var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry  : './src/app.js',
    output : {
        path     : __dirname + "/dist/src",
        filename : 'app.dist.js'
    },
    module : {
        loaders: [ {
            test   : /.js$/,
            loader : 'babel-loader'
        }
        ]
    }
};

//copy everything from src. Not really what we want.
module.exports = {
    path: __dirname + "/dist/src",
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src' }
        ])
    ]
};
