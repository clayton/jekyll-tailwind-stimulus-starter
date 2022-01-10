const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// https://webpack.js.org/configuration/
module.exports = {
  entry: {
    main: path.join(__dirname, '_webpack', 'main'),
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name]-bundle.js',
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    modules: ['node_modules'],
  },
  plugins: [
    new MiniCssExtractPlugin({filename:"main.css"}),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 4000,
      server: { baseDir: ['_site'] }
    })
  ],
  optimization: {
    
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ],
      },
    ],
  },
};

