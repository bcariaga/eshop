const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3002,
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
    new ExternalTemplateRemotesPlugin(),
    new ModuleFederationPlugin({
      name: 'searchResult',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: {'react': {singleton: true}, 'react-dom': {singleton: true}},
      remotes: {
        lib: 'lib@[libUrl]/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
