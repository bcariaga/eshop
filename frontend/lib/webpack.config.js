const {ModuleFederationPlugin} = require('webpack').container;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3004,
  },
  output: {
    publicPath: 'auto',
    clean: true,
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
    new ModuleFederationPlugin({
      name: 'lib',
      filename: 'remoteEntry.js',
      exposes: {
        './ItemPrice': './src/components/ItemPrice',
        './Categories': './src/components/Categories',
        './mediaQueries': './src/styles/mediaQueries',
      },
      shared: {'react': {singleton: true}, 'react-dom': {singleton: true}},
    }),
  ],
};
