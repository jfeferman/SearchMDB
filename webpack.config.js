const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => ({
  entry: [
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
    new webpack.EnvironmentPlugin(['NODE_ENV', 'SEARCHMDB_HOST', 'SEARCHMDB_PORT']),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
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
});
