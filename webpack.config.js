const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'script.js',
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin({
      filename: 'style.css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
       test: /\.scss$/,
      //  include: path.join(__dirname, 'src', 'styles'),
       use: ExtractTextPlugin.extract({
         fallback: 'style-loader',
         use: ['css-loader', 'sass-loader']
       })
     }
    ],
  },
};
