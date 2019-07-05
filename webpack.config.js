const path = require('path');
const plugins = require('./webpack.plugin');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bin')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
  },
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
        },
        {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-modules-typescript-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
  plugins: [plugins.manifest, plugins.serviceWorker]
}