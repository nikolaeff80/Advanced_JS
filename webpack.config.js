const path = require ('path')
const MiniCssPlugin = require ('mini-css-extract-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve (__dirname, 'index.js')
    },
    output: {
        path: path.resolve (__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: '/node_modules/',
                use: [MiniCssPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssPlugin ({
            filename: '[name].css',
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin ({
            template: path.resolve (__dirname, 'index.html'),
            filename: 'index.html'
        })
    ]
}