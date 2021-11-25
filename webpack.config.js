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
                  // 需要兼容到以下浏览器的什么版本
                  targets: {
                    ie: 7,
                    edge: '17',
                    firefox: '60',
                    chrome: '67',
                    safari: '11.1'
                  },
                  // 按需加载
                  useBuiltIns: 'usage',
                  // 指定core-js版本 看好了这个地方如果和你安装的包的版本不一样会报错
                  corejs: '3.8.3'
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
    config.devtool = 'source-map'
  }
  return config
}
