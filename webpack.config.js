const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    filename: 'transponder.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: []
}

module.exports = (env, { mode }) => {
  if (mode === 'development') {
    config.devtool = 'source-map'
  }
  return config
}
