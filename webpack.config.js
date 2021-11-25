const path = require('path')
const HtmlWebpackPlugin = require(require.resolve('html-webpack-plugin'))

const config = {
  entry: './src/index.js',
  output: {
    filename: 'transponder.js',
    path: path.resolve(__dirname, 'build'),
    library: 'Transponder',
    libraryTarget: 'umd'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /(\.js?|jsx?)$/,
        use: 'babel-loader'
      },
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: {
            worker: 'SharedWorker'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/demos/parent.html',
      title: 'parent',
      filename: 'parent.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/demos/child.html',
      title: 'child',
      filename: 'child.html'
    })
  ],
  devServer: {
    bonjour: true,
    hot: true,
    port: 9999
  }
}

module.exports = (env, { mode }) => {
  if (mode === 'development') {
    config.devtool = 'eval-source-map'
  }
  return config
}
