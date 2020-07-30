const path = require('path');
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge( common,{
    mode: "production",
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
});