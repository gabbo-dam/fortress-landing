// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { favicon, appManifest, ignoreMomentLocales, entry, resolve, nft } = require('./webpack.shared');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    publicPath: '/',
  },
  devServer: {
    stats: 'minimal',
    contentBase: './dist',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|pdf|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      nft,
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
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
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
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
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),

    ignoreMomentLocales,

    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: 'style.[hash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),

    favicon,
    appManifest,

    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, './static') },
      ],
    }),

    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    removeAvailableModules: false,
    removeEmptyChunks: false,
    concatenateModules: true,
    noEmitOnErrors: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: false,
        cache: false,
        parallel: true,
        terserOptions: {
          output: {
            comments: false,
          },
          compress: {
            drop_console: false,
          },
        },
      }),
    ],
  },
};
