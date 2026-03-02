const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: './index.js',
    output: {
        path: path.join(__dirname, './build'),
        filename: 'server.bundle.js',
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                exportOnlyLocals: true,
                                exportLocalsConvention: 'camelCase',
                                localIdentName: '[local]_[hash:base64:5]'
                            }
                        }
                    }
                ]
            }
        ]
    }
};