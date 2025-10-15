<script setup lang="ts">
import type { NuxtError } from '#app'

const { locale, t } = useI18n()

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

useHead({
  htmlAttrs: {
    lang: locale.value
  }
})

useSeoMeta({
  title: () => t('seo.error.title'),
  description: () => t('seo.error.description')
})
</script>

<template>
  <div>
    <AppHeader :links="navLinks()" />

    <UMain>
      <UContainer>
        <UPage>
          <UError :error="error" />
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />

    <UToaster />
  </div>
</template>
