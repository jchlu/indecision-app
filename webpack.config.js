const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      loader: [
        'style-loader',
        'css-loader'
      ],
      test: /\.css$/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devserver
    contentBase: path.join(__dirname, 'public')
  }
}
