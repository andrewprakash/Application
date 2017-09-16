
module.exports = {
    entry: {
        app: ['babel-polyfill', '/src/main.js']
    },
    output: {
        path: './dist',
        filename: 'js/[name].js'
    }
}