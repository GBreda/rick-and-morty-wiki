module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import '@/assets/scss/_variables.scss';`,
      },
    },
  },
};
