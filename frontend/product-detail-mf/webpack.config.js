const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = (env) => ({
  entry: './src/index',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3003,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new ModuleFederationPlugin({
      name: 'productDetail',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: {'react': {singleton: true}, 'react-dom': {singleton: true}},
      remotes: {
        lib: 'lib@[libUrl]/remoteEntry.js',
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
});
