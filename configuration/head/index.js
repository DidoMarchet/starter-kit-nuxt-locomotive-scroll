// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-head
import fonts from './fonts.js'

export default {
  head: {
    htmlAttrs: {},
    meta: [
      { name: 'charset', content: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      ...fonts,
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [],
  },
}
