const HTMLPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './app',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/app/index.html`,
    }),
  ],
  resolve: {
    modules: ['node_modules']
  },
  target: 'web'
}
