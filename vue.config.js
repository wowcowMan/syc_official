const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all', headers: {
      // 'Content-Security-Policy': "frame-src https://drive.google.com https://www.youtube.com/;"
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
