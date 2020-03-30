var path = require('path');
module.exports = {
  outputDir:'vuecli3',
  publicPath: './',
  devServer: {
    // 设置主机地址
    host: 'localhost',
    // 设置默认端口
    // port: '8080',
    // 打开浏览器
    open: true,
    port: 9000,
    // 设置代理
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8081',
    //     pathRewrite: {
    //       '^/api': '/mock'
    //     }
    //   }
    // }
  },
  configureWebpack: {
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }
      ]
    }
  }
}