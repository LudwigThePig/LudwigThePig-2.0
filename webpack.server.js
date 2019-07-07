const path = require('path');
const nodeExternals = require('webpack-node-externals');

// https://alligator.io/react/server-side-rendering/
// https://alligator.io/react/react-router-ssr/

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'server.tsx'),

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
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: "ts-loader",
        exclude: /node_modules/

      },
      { 
        test: /\.scss$/, 
        loader: 'ignore-loader'
      }
    ]
  }
};