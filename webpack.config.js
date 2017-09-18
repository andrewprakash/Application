
console.log("Starting the build process")

module.exports = {
    entry: {
        "app-reports": ['babel-polyfill', __dirname + '/src/main.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js',
        libraryTarget: "umd"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react','stage-1']
                }
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['es2015','react','stage-1']
                }
            }
        ]
    }
}