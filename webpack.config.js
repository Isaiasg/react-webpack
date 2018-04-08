const path = require('path');

module.exports = {
    mode:'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.html$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]' }
      }
    ]
  }
};