// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US', dir: 'ltr', file: 'en.json' },
      { code: 'es', name: 'Spanish', language: 'es-VE', dir: 'ltr', file: 'es.json' },
    ],
    // lazy: true,
    // langDir: 'i18n/locales/',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
    },
    // baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://maikel-dev.vercel.app',
  },

  // app: {
  //   baseURL: process.env.NUXT_PUBLIC_SITE_URL || 'https://maikel-dev.vercel.app',
  // },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/',
        '/es',
        '/es/about',
        '/es/projects',
        '/about',
        '/projects'
      ],
      crawlLinks: true
    }
  },

  hooks: {
    async 'prerender:routes'(ctx) {
      // Prerenderizar rutas para ambos idiomas
      const routes = ['/', '/about', '/projects']
      const locales = ['en', 'es']

      for (const locale of locales) {
        for (const route of routes) {
          if (locale === 'en') {
            ctx.routes.add(route)
          } else {
            ctx.routes.add(`/${locale}${route}`)
          }
        }
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
