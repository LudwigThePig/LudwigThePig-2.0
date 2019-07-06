const path = require('path');
const plugins = require('./webpack.plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, 'server.ts'),
  
  target: 'node',
  
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname)
  },
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
  },
  
  externals: [nodeExternals()],
  
  module: {
    rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
              {
                  loader: "ts-loader"
              }
          ]
      }
    ]
  }
}
