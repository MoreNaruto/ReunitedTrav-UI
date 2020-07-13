var Dotenv = require('dotenv-webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        plugins: [
            new DirectoryNamedWebpackPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new Dotenv(),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: "./src/index.html", filename: "./index.html"}),
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new webpack.HotModuleReplacementPlugin()
    ],
    stats: {
        colors: true
    },
    devServer: {
        contentBase: './dist',
        hot: true
    }
}