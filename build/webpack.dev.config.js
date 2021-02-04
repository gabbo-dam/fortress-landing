const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ignoreMomentLocales, resolve, entry, nft } = require('./webpack.shared');

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    chunkFilename: '[name].bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    stats: 'minimal',
    contentBase: './dist',
    open: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(gif|pdf|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]'
            }
          },
        ],
      },
      nft,
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "eslint-loader",
            options: {
              emitError: true
            }
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, "../src/common")]
              },
            },
          },
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['raw-loader'],
      },
    ]
  },
  resolve,
  plugins: [
    ignoreMomentLocales,

    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: 'style.[hash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
  ]
};
