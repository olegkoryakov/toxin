const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
};

const getFiles = (dir, _files = []) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const name = `${file}`;
    const filePath = `${dir}/${file}`;
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, _files);
    } else {
      _files.push(name);
    }
  });
  return _files;
};

const getPages = (files) => {
  const pages = files.filter((file) => file.endsWith('.pug'));
  return pages;
};

const pagesPath = `${PATHS.src}/pages`;
const PAGES = getPages(getFiles(pagesPath));


module.exports = {
  externals: {
    paths: PATHS,
  },

  entry: {
    bundle: `${PATHS.src}/index.ts`,
  },

  output: {
    filename: 'js/[name].js',
    path: PATHS.dist,
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: '/node_modules',
        use: [
          'ts-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]',
          limit: false,
        },
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader',
        options: {
          name: 'img/[name].[ext]',
          limit: false,
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${PATHS.src}/img/`, to: 'img/' },
        { from: `${PATHS.src}/fonts/`, to: 'fonts/' },
      ],
    }),
    ...PAGES.map((page) => new HTMLWebpackPlugin({
      template: `${PATHS.src}/pages/${page.split('.pug')[0]}/${page}`,
      filename: `./${page.replace(/\.pug/, '.html')}`,
    })),
  ],
};
