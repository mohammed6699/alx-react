    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');

    module.exports = {
    mode: 'production',
    entry: './src/js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
            filename: 'images/[hash][ext][query]',
            },
        },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        template: './src/index.html',
        }),
    ],
    performance: {
        maxAssetSize: 1000000, // Set a custom max asset size to avoid warnings
        maxEntrypointSize: 1000000,
    },
    };
