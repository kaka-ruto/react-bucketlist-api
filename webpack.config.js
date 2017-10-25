const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin ({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
});
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.scss$/, 
                use: ExtractTextPlugin.extract({ fallback: 'style-loader',
                use: 'css-loader!sass-loader' })
            }
        ]
    },

    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin("index.css"),
    ]

    // resolve: {
    //     root: __dirname,
    //     alias: {
    //         applicationStyles: 'client/styles/index.scss',
    //         Dashboard: 'client/containers/Dashboard.jsx',
    //         LoginPage: 'client/containers/LoginPage.jsx',
    //         SignUpPage: 'client/containers/SignUpPage.jsx'
    //     },
    //     extensions: ['', '.js', '.jsx']
    // }
}
