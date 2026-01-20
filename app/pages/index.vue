<script setup lang="ts">
const { locale } = useI18n()

const { data: page } = await useAsyncData(`index-${locale.value}`, () => {
  return queryCollection('index')
    .where('language', '=', locale.value)
    .first()
})

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
    <UPageSection
      v-if="page.stack"
      :title="page.stack.title"
      :description="page.stack.description"
      :ui="{
        container: 'px-0 !pt-0 sm:gap-6 lg:gap-8',
        title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
        description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
      }"
    >
      <LandingStack :items="page.stack.items" />
    </UPageSection>
    <LandingFAQ :page />
  </UPage>
</template>
