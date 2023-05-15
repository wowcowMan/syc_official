const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all', headers: {
      'Content-Security-Policy': "frame-src https://www.youtube.com/;"
      // "Content-Security-Policy": "frame-src 'self' https://drive.google.com https://accounts.google.com/"
    }
  },

  pluginOptions: {
    moment: {
      locales: [
        ''
      ]
    }
  },

  publicPath: '/syc_official/dist/'
})
