const path = require('path');
const nodeExternals = require('webpack-node-externals');

// https://alligator.io/react/server-side-rendering/
// https://alligator.io/react/react-router-ssr/

module.exports = {
  entry: path.resolve(__dirname, 'server.js'),

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname),
    filename: 'serverBundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
  },  

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
          }
        ]
      },
      { 
        test: /\.scss$/, 
        loader: 'ignore-loader'
      }
    ]
  }
};