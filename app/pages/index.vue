<script setup lang="ts">
const { locale } = useI18n()

// Debug
console.log('Current locale:', locale.value)

const { data: page } = await useAsyncData('index', () => {
  console.log('Locale inside useAsyncData:', locale.value)
  return queryCollection('index')
    .where('language', '=', locale.value)
    .first()
}, {
  watch: [locale]
})

console.log('Page data:', page.value)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </UPageSection>
    <LandingFAQ :page />
  </UPage>
</template>
