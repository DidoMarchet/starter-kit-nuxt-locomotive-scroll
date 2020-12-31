module.exports = {
  presets: [
    [
      '@nuxt/babel-preset-app',
      {
        useBuiltIns: 'entry',
        targets: { ie: 11, uglify: true }
      }
    ],
    ['@babel/preset-env',
      {
        targets: { node: 'current' }
      }
    ]
  ]
}
