// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-head
import fonts from './fonts.js'

export default {
  head: {
    htmlAttrs: {},
    meta: [{ name: 'charset', content: 'utf-8' }],
    link: [...fonts],
    script: [],
  },
}
