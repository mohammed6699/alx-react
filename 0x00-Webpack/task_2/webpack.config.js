    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');

    module.exports = {
    mode: 'production',  // Set mode to 'production' for optimized output
    entry: './js/dashboard_main.js',  // Path to your entry file
    output: {
        filename: 'bundle.js',  // Output filename
        path: path.resolve(__dirname, 'public'),  // Output directory
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],  // Loaders for handling CSS files
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',  // Loader for handling images
            generator: {
            filename: 'images/[hash][ext][query]',  // Output path for images
            },
        },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),  // Plugin to clean output directory before each build
        new HtmlWebpackPlugin({
        template: './public/index.html',  // Path to your HTML template
        inject: 'body',  // Inject the script at the bottom of the body
        }),
    ],
    performance: {
        maxAssetSize: 1000000,  // Set custom asset size limit
        maxEntrypointSize: 1000000,
    },
    };
