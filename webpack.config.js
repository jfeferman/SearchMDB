/* eslint-disable no-param-reassign */
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: [
      '@babel/polyfill',
      './src/index.js',
    ],
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Search MDB',
        template: './public/index.html',
      }),
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist'],
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/react',
              ],
            },
          },
        },
        {
          test: /\.(s*)css$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif|ico)$/,
          loader: 'url-loader?limit=10',
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    output: {
      path: path.join(__dirname, './dist'),
      publicPath: '/',
      filename: 'bundle.js?[hash]',
    },
    devtool: 'source-map',
    devServer: {
      host: `http://${process.env.SEARCHMDB_HOST || 'localhost'}`,
      port: process.env.SEARCHMDB_PORT || 3000,
      contentBase: './public',
      hot: true,
      publicPath: '/',
      historyApiFallback: true,
    },
  };
};
