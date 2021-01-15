module.exports = {
  configureWebpack:{
    resolve:{

      alias:{
        'assets':'@/assets',//vue-cli2不可以直接写@，需要写src
        'common':'@/common',
        'network':'@/network',
        'components':'@/components',
        'views':'@/views',
        // 'vue':'vue/dist/vue.js'
      }
    }
  }
}