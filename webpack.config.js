const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');
const moment = require('moment');

// Configuration for the file banner
const configureBanner = () => {
    return {
        banner: [
        `/*!`, 
            ` * ${pkg.name} - v${pkg.version} - ${moment().format('ll')}`,
        ` * https://github.com/mvdschee/classToggle.js`,
        ` * Copyright (c) ${moment().format('YYYY')} ${pkg.author}; Licensed ${pkg.license}`, 
        ` */`,
        ``
        ].join('\n'),
        raw: true
    };
};

// Configuration for TypeScript loader
const configureTypeScriptLoader = () => {
    return {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };
};

module.exports = {
    entry: './src/classToggle.ts',
    mode: 'production',
    module: {
        rules: [
            configureTypeScriptLoader(),
        ]
    },
    plugins: [
        new webpack.BannerPlugin(
            configureBanner()
        ),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'classToggle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: true,
    }
};