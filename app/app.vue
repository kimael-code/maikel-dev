<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale, t } = useI18n()
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: locale.value
  }
})

useSeoMeta({
  titleTemplate: t('seo.titleTemplate'),
  ogImage: 'https://cdn.bsky.app/img/avatar/plain/did:plc:baqqkpclvukg7s3e2s3f5yoz/bafkreigmxjgzfi3ilrgxn3x6vakljhl3tv5qqd4tddcro54gyash6hpyz4@jpeg',
  twitterImage: 'https://cdn.bsky.app/img/avatar/plain/did:plc:baqqkpclvukg7s3e2s3f5yoz/bafkreigmxjgzfi3ilrgxn3x6vakljhl3tv5qqd4tddcro54gyash6hpyz4@jpeg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        shortcut="meta_k"
        :links="navLinks()"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
