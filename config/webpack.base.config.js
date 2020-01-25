const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: path.resolve(__dirname, '../dist/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '127.0.0.1',
    port: 3000,
    open: true,
    hot: true,
    stats: 'errors-only'
  }
}
