require('babel-register');

const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, '../src'),
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'babel-loader',
        options: {
          plugins: ['react-hot-loader/babel'],
        },
      },
    ],
  },
  externals: {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
  },
};
