const baseUrl = 'https://www.goschevski.com'
const baseTitle = 'Aleksandar Goševski - software developer'
const baseDescription =
  'Thoughts about web development, programming, devops, tools, design, etc.'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: baseTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: baseDescription },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      },
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/formatDate.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    'nuxt-content-body-html',
    '@nuxt/content',
    '@nuxtjs/feed',
  ],

  feed: [
    {
      path: '/rss.xml', // The route to your feed.
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
      // The create function (see below)
      async create(feed) {
        feed.options = {
          title: baseTitle,
          description: baseDescription,
          link: baseUrl,
          feed: `${baseUrl}/rss.xml`,
          language: 'en',
          copyright: 'All rights reserved 2022, Aleksandar Goševski',
        }

        const { $content } = require('@nuxt/content')

        const articles = await $content('articles')
          .sortBy('createdAt', 'desc')
          .fetch()

        articles.forEach((article) => {
          feed.addItem({
            title: article.title,
            link: `${baseUrl}/${article.slug}`,
            date: new Date(article.createdAt),
            description: article.description,
            content: article.bodyHtml,
            guid: `${baseUrl}/${article.slug}`,
          })
        })

        return feed
      },
    },
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-preset-env': {
          stage: 1,
          features: {
            'custom-media-queries': {
              importFrom: 'css/global.css',
            },
          },
        },
      },
    },
  },
}
