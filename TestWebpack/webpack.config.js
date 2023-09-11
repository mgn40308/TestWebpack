const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//development  production
module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'wwwroot', 'src'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],

}