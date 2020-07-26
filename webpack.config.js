module.exports = {
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {test: /\.(png|jpg)$/, loader: 'url-loader'},
        ]
    }
};