const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

var customConfig = function webpackConfig() {
    const PROD = process.env.NODE_ENV === 'production';
    const outputPath = PROD ? 'dist/prod/' : 'dist/dev/';

    var config = Object.assign({});
    config.entry = './src/js/app.js';

    config.output = {
        path: path.resolve(__dirname, outputPath),
        filename: 'bundle.js'
    };
    config.optimization = {
        minimize: PROD
    };
    config.module = {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { minimize: PROD }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: ['last 2 versions']
                                    })
                                ]
                            }
                        },
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'icons/'
                        }
                    }
                ]
            }
        ]
    };
    config.plugins = [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            title: PROD ? 'Production mode' : 'Development mode',
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
        // new CopyWebpackPlugin(
        //   [
        //     {
        //       from: path.resolve(__dirname, 'assets'),
        //       to: path.resolve(__dirname, 'dist/assets/')
        //     },
        //   ]),
        // new ImageminPlugin({
        //   test: /\.(jpe?g|png|gif|svg)$/i,
        //   pngquant: {
        //     quality: '95-100'
        //   }
        // })
    ];

    return config;
};

module.exports = customConfig;
