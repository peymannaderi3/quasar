import installQuasar from './install-quasar.js'
import { version } from '../package.json'
import lang from './lang.js'
import iconSet from './icon-set.js'

import * as components from './components.js'
import * as directives from './directives.js'
import * as plugins from './plugins.js'
import * as utils from './utils.js'

export default {
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
  ...components,
  ...directives,
  ...plugins,
  ...utils
}
