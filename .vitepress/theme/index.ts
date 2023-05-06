/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="../../shims" />
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.scss'
import 'uno.css'

import HomePage from './components/HomePage.vue'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomePage),
    })
  },
  enhanceApp() {
    if (import.meta.env.SSR)
      return

    if (PWA)
      import('virtual:pwa-register').then(({ registerSW }) => registerSW({ immediate: true }))
  },
}
