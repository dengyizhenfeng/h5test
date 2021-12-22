const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  devServer: {
    open: true,
    port: '25904',
    https: false,
    hotOnly: false,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api/': {
        target: 'http://172.25.47.62:8811',
        changeOrigin: true,
        pathRewrite: {
          '^/': '/'
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
