const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    port: 8080,
    compress: true
  },
  module: {
    rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
        'postcss-loader']
        },
        {
            test: /\.(svg|jpg|png)$/,
            type: 'asset/resource'
        },
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: '/node_modules/'
          }
      ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: './src/index.html'
      })
  ]
};