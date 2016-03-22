
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