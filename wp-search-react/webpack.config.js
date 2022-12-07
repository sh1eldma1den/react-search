const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
      admin: './assets/js/admin.js',
      public: './assets/js/public.js',
  },
  plugins: {
    new UglifyJSPlugin()
  },
      externals: {
    jquery: "jQuery"
  },
  output: {
    filename: 'public.min.js',
    path: path.resolve( __dirname, 'assets/js' )
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env', 'babel-preset-react']
                }
            }
        }
    ]
  }
};