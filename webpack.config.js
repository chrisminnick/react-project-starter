module.exports = {
    entry  : './src/app.js',
    output : {
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