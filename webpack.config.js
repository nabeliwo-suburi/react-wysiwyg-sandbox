const path = require('path')
const webpack = require('webpack')

const devServer = {
  host: 'http://127.0.0.1',
  port: 3355,
}

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: path.join(__dirname, './src/main.js'),
    'hot-loader': [
      'react-hot-loader/patch',
      `webpack-dev-server/client?${devServer.host}:${devServer.port}`,
      'webpack/hot/only-dev-server',
    ],
  },
  output: {
    path: path.join(__dirname, './public/assets/js'),
    publicPath: `${devServer.host}:${devServer.port}/`,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public/assets/js'),
    port: devServer.port,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },
}
