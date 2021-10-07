const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: process.env.ASSET_PATH || './',
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/html/index.html' }),
    ],
    module: {
        rules: [
        {
            test: /\.scss$/i,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
            test: /\.html$/i,
            exclude: /node_modules/,
            loader: 'html-loader',
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.svg/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        esModule: false,
                    }
                }
            ],
        },
    ]},
    devServer: {
        static: {
            directory: path.join(__dirname, '/dist'),
        },
        hot: true,
        host: 'localhost',
        port: 3000,
    },
    devtool: 'inline-source-map',
};