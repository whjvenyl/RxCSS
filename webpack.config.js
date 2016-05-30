/* eslint strict:0 */
var path = require('path');

'use strict';

module.exports = {
  entry: path.join(__dirname, 'src/index'),
  output: {
    path: path.resolve('./dist/'),
    filename: "index.js",
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: [],
  // devtool: 'inline-source-map'
};
