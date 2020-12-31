export default {
  transpile: [
    // Vendors
    'gsap'
  ],
  analyze: true,
  // Run ESLINT on save
  extend (config, ctx) {
    if (ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
    config.node = {
      fs: 'empty'
    }
  },
  hotMiddleware: {
    client: {
      overlay: false
    }
  },
  postcss: [
    require('autoprefixer')({
      overrideBrowserslist: ['> 5%']
    })
  ]
}
