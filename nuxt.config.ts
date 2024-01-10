// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/css/global.css'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/mdc'
  ],
  content: {
    highlight: {
      theme: 'one-dark-pro',
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  nitro: {
    prerender: {
      routes: ['/rss.xml'],
    }
  },
  postcss: {
    plugins: {
      '@csstools/postcss-global-data': {
        files: [
          './css/global.css'
        ]
      },
      'postcss-pxtorem': {
        mediaQuery: true,
        propList: [
          '--*',
          '*height',
          '*width',
          'font-size',
          'font',
          'grid-template-*',
          'letter-spacing',
          'line-height'
        ]
      },
      'postcss-preset-env': {
        stage: 1,
        browsers: ['> 1% in US', 'last 2 versions', 'not dead']
      }
    }
  }
})
