const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    target: 'node',
    entry: './src/index.js',
    resolve: {
        extensions: ['.js'],
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'commonjs2',
        publicPath: '/api/block',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: /src/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        caller: { target: 'node' },
                    },
                },
            },
            {
                test: /\.(jpg|png|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
                use: {
                    loader: 'url-loader?limit=1024&name=assets/[name].[ext]',
                },
            },
        ],
    },

    externals: [
        webpackNodeExternals(),
    ],
};``

module.exports = config;
