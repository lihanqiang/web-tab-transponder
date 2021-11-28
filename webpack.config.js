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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    ie: '7',
                    edge: '17',
                    firefox: '60',
                    chrome: '67',
                    safari: '11.1'
                  },
                  useBuiltIns: 'usage',
                  corejs: 3
                }
              ]
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  corejs: 3 // 指定 runtime-corejs 的版本，目前有 2 3 两个版本
                }
              ]
            ]
          }
        }
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
    }),
    new HtmlWebpackPlugin({
      template: 'src/demos/iframe.html',
      title: 'iframe',
      filename: 'iframe.html'
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
