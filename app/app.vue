<script setup lang="ts">
const { locale, t } = useI18n()
const colorMode = useColorMode()

const color = computed(() =>
  colorMode.value === 'dark' ? '#1a2e05' : 'white'
)

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
    {
      name: 'theme-color',
      content: 'white',
      media: '(prefers-color-scheme: light)'
    },
    {
      name: 'theme-color',
      content: '#1a2e05',
      media: '(prefers-color-scheme: dark)'
    },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent'
    }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/android-chrome-192x192.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      href: '/android-chrome-512x512.png'
    },
    { rel: 'manifest', href: '/manifest.webmanifest' },
    {
      rel: 'canonical',
      href: `https://maikel-dev.vercel.app${useRoute().path}`
    }
  ],
  htmlAttrs: {
    lang: computed(() => locale.value)
  }
})

useSeoMeta({
  titleTemplate: t('seo.titleTemplate'),
  ogSiteName: 'Maikel Carballo',
  ogImage:
    'https://cdn.bsky.app/img/avatar/plain/did:plc:baqqkpclvukg7s3e2s3f5yoz/bafkreielixenxu3y6iqpychyxb3lhtn3wgeont73ntmxwhdwp5m3lxs6qy@jpeg',
  twitterImage:
    'https://cdn.bsky.app/img/avatar/plain/did:plc:baqqkpclvukg7s3e2s3f5yoz/bafkreielixenxu3y6iqpychyxb3lhtn3wgeont73ntmxwhdwp5m3lxs6qy@jpeg',
  twitterCard: 'summary_large_image'
})

useSchemaOrg([
  definePerson({
    name: 'Maikel Carballo',
    image:
      'https://cdn.bsky.app/img/avatar/plain/did:plc:baqqkpclvukg7s3e2s3f5yoz/bafkreielixenxu3y6iqpychyxb3lhtn3wgeont73ntmxwhdwp5m3lxs6qy@jpeg',
    description: t('seo.defaultDescription'),
    sameAs: [
      'https://github.com/kimael-code',
      'https://discord.gg/TTAKNqpagT',
      'https://bsky.app/profile/maikel-dev.bsky.social'
    ]
  }),
  defineWebSite({
    name: 'Maikel Carballo - Portafolio'
  })
])
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>
  </UApp>
</template>
