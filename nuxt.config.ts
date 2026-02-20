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
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://maikel-dev.vercel.app',
    name: 'Maikel Carballo - Portafolio'
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      // Ignora la ruta raíz para que sea manejada dinámicamente por el servidor Nitro.
      // Esto permite que la redirección de idioma del lado del servidor funcione correctamente.
      ignore: ['/'],
      routes: ['/es', '/es/about', '/es/projects', '/about', '/projects'],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
        dir: 'ltr',
        file: 'en.json'
      },
      {
        code: 'es',
        name: 'Spanish',
        language: 'es-VE',
        dir: 'ltr',
        file: 'es.json'
      }
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true
    },
    baseUrl: 'https://maikel-dev.vercel.app'
  },

  sitemap: {}
})
