// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-plugins
export default {
  plugins: [
    { src: '~/plugins/both.js' },
    { src: '~/plugins/client.js', mode: 'client' },
    { src: '~/plugins/server.js', mode: 'server' },
  ],
  // plugins: ['~/plugins/url-helpers.js']
}
