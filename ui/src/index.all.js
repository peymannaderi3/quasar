import installQuasar from './install-quasar.js'
import { version } from '../package.json'
import lang from './lang.js'
import iconSet from './icon-set.js'
import ssrUpdate from './ssr-update.js'

import * as components from './components.js'
import * as directives from './directives.js'
import * as plugins from './plugins.js'

export * from './components.js'
export * from './directives.js'
export * from './plugins.js'
export * from './utils.js'

export const Quasar = {
  version,
  install (app, opts) {
    installQuasar.call(this, app, {
      ...opts,
      components,
      directives,
      plugins
    })
  },
  lang,
  iconSet,
  ssrUpdate
}
