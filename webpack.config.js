const path = require('path')

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
  plugins: []
  // devServer: {
  //   hot: true,
  //   port: 9999
  // }
}

module.exports = (env, { mode }) => {
  if (mode === 'development') {
    config.devtool = 'source-map'
  }
  return config
}
