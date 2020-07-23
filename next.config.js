require('dotenv').config();

const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.components = path.join(__dirname, 'components');
    config.resolve.alias.styles = path.join(__dirname, 'styles');
    config.resolve.alias.svgs = path.join(__dirname, 'svgs');
    config.resolve.alias.utils = path.join(__dirname, 'utils');

    config.module.rules.push({
      test: /\.(woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    // mini-css-extract-plugin generates a warning when importing css as modules
    // as we scope manually we can ignore this warning: https://github.com/zeit/next-plugins/issues/506#issuecomment-589269285
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      })
    );

    config.node = {
      fs: 'empty',
    };

    return config;
  },
};

module.exports = withPlugins(
  [[withFonts], [withSass], [optimizedImages], [withBundleAnalyzer]],
  nextConfig
);
