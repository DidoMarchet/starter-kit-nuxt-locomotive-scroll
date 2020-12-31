import build from './configuration/build'
import generate from './configuration/generate'
import head from './configuration/head'
import modules from './configuration/modules'
import plugins from './configuration/plugins'
import gtm from './configuration/google-tag-manager'
import server from './configuration/server'

export default {
  target: 'static',
  ssr: true,
  modern: true,
  build,
  generate,
  head,
  modules,
  plugins,
  gtm,
  server
}
