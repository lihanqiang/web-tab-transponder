const path = require('path')
const HtmlWebpackPlugin = require(require.resolve('html-webpack-plugin'))
const CopyWebpackPlugin = require(require.resolve('copy-webpack-plugin'))

const config = {
  entry: './src/index.js',
  output: {
    filename: 'transponder.js',
    path: path.resolve(__dirname, 'build'),
    libraryExport: 'default',
    library: 'Transponder',
    libraryTarget: 'umd',
    environment: {
      arrowFunction: false,
      const: false
    }
  },
  mode: 'development',
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
    }),
    new HtmlWebpackPlugin({
      template: 'src/demos/iframe.html',
      title: 'iframe',
      filename: 'iframe.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/transponder-IE.js'),
          to: path.resolve(__dirname, 'build')
        }
      ]
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
