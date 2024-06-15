const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
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
    ],
  },
  devServer: {
    port: 8564,
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack',
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all', // Divide todos los tipos de chunks
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, // Selecciona los módulos dentro de node_modules
          name(module) {
            // Obtén el nombre del paquete
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`; // Crea un nombre de chunk basado en el nombre del paquete
          },
        },
      },
    },
  },
};
