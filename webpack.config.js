let path = require('path');

module.exports = {
  // basic  webpack init
  entry: './src/js/main.js',

  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  // adding babel loader
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
