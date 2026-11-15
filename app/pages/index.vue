<script setup lang="ts">
const { locale } = useI18n()

const { data: page } = await useAsyncData(`index-${locale.value}`, () => {
  return queryCollection('index').where('language', '=', locale.value).first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: () => page.value?.seo?.title || page.value?.title,
  ogTitle: () => page.value?.seo?.title || page.value?.title,
  description: () => page.value?.seo?.description || page.value?.description,
  ogDescription: () => page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: 'pt-0! lg:grid lg:grid-cols-2 lg:gap-12'
      }"
    >
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </UPageSection>
    <UPageSection
      v-if="page.stack"
      id="stack"
      :description="page.stack.description"
      class="scroll-mt-24"
      :ui="{
        container: 'px-0 pt-0! sm:gap-6 lg:gap-8',
        title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
        description: 'text-left text-pretty mt-3 text-sm sm:text-md lg:text-sm text-muted'
      }"
    >
      <template #title>
        <a
          href="#stack"
          class="group relative inline-flex items-center transition-colors duration-200 hover:text-primary focus-visible:text-primary lg:after:absolute lg:after:inset-y-0 lg:after:-inset-s-2 lg:after:w-2"
        >
          <span class="absolute -ms-8 top-0.5 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated border border-primary/40 text-primary rounded-md hidden lg:flex shadow-xs transition">
            <UIcon
              name="i-lucide-hash"
              class="size-4 shrink-0"
            />
          </span>
          {{ page.stack.title }}
        </a>
      </template>
      <LandingStack :items="page.stack.items" />
    </UPageSection>
    <LandingFAQ :page />
  </UPage>
</template>
