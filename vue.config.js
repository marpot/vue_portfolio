const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '~bulma': path.resolve(__dirname, 'node_modules/bulma/css/bulma.css')
      }
    }
  }
});

module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      definitions[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = false;
      return definitions;
    });
  }
};