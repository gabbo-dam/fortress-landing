const path = require('path');
const webpack = require('webpack');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const favicon = new FaviconsWebpackPlugin({
  logo: path.resolve('favicon.png'),
  persistentCache: true,
  inject: 'force',
  favicons: {
    appName: 'Fortress.Finance',
    developerName: 'Fortress.Finance',
    theme_color: '#000000',
    icons: {
      android: true,
      appleIcon: true,
      favicons: true,
      appleStartup: false,
      coast: false,
      firefox: false,
      windows: false,
      yandex: false
    }
  }
});

const ignoreMomentLocales = new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/);

const appManifest = new WebpackPwaManifest({
  name: 'Fortress.Finance',
  short_name: 'Fortress.Finance',
  description: 'Welcome to Fortress.Finance! You can put your LP tokens to work to farm Fuel.',
  background_color: '#000000',
  theme_color: '#000000',
  icons: {
    src: path.resolve('favicon.png'),
    sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
  },
});

const resolve = {
  extensions: ['.js', '.jsx'],
  alias: {
    translate: path.resolve(__dirname, '../src/i18n/translate.jsx'),
  },
  modules: [path.join(__dirname, '../src'), 'node_modules']
};

const entry = './src/index.jsx';

const nft = {
  test: /\.(json)$/i,
  type: 'javascript/auto',
  exclude: /node_modules/,
  include: /nfts/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name(resourcePath) {
          if (resourcePath.includes('og-nft')) return 'nft/token-uris/[name]';
          if (resourcePath.includes('special')) return 'special-nft/token-uris/[name]';

          return 'nfts/[name]';
        },
      }
    },
  ],
};

module.exports = { appManifest, ignoreMomentLocales, favicon, resolve, entry, nft };
