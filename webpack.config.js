const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(pdf|png|jpg|gif)$/i, loader: 'url-loader'},
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
};