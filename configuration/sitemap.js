// https://sitemap.nuxtjs.org/
export default {
  sitemap: {
    hostname: process.env.NUXT_ENV_BASE_URL,
    gzip: true,
    routes: () => {
      return []
    },
  },
}

