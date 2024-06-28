const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    hot: true,
    open: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: false,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', '@babel/preset-react'
            ],
          },
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../dist/index.html'),
    }),
  ],
}
