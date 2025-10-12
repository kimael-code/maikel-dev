<script setup lang="ts">
const { locale } = useI18n()
const { getCollectionName } = useContentCollections()

const { data: page } = await useAsyncData('index', () => {
  const collectionName = getCollectionName()
  return queryCollection(collectionName).path('/').first()
}, {
  watch: [locale]
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const pageData = page.value as any

useSeoMeta({
  title: pageData?.seo.title || pageData?.title,
  ogTitle: pageData?.seo.title || pageData?.title,
  description: pageData?.seo.description || pageData?.description,
  ogDescription: pageData?.seo.description || pageData?.description
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
