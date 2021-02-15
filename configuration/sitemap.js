// https://sitemap.nuxtjs.org/
export default {
  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
    routes: () => {
      return []
    },
  },
}
