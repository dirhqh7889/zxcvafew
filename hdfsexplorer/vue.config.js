module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  }
}
