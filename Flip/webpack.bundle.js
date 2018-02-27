const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    library: '@rnt/flip',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, './src')],
        use: 'babel-loader',
      },
    ],
  },
  externals: ['react', 'react-native', 'react-navigation', 'prop-types'],
}
