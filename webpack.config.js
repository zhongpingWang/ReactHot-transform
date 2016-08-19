/* eslint-disable */
const path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    './index.jsx' // Your appʼs entry point
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
    filename: 'js/[name].js'

  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('js/comm.js'),
    // 给js中剥离的css的文件指定名称
    new ExtractTextPlugin('/css/[name].css'),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [

      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!less')
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=2048&name=imgs/[name]_[hash:4].[ext]'
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }

    ]
  }
}