<script setup lang="ts">
const { locale } = useI18n()

const { data: page } = await useAsyncData(`about-${locale.value}`, () => {
  return queryCollection('about').where('language', '=', locale.value).first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()

useSeoMeta({
  title: () => page.value?.seo?.title || page.value?.title,
  ogTitle: () => page.value?.seo?.title || page.value?.title,
  description: () => page.value?.seo?.description || page.value?.description,
  ogDescription: () => page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: 'mx-0! text-left',
        description: 'mx-0! text-left',
        links: 'justify-start'
      }"
    >
      <template #title>
        <span class="text-gradient-brand">
          {{ page.title }}
        </span>
      </template>
      <UColorModeAvatar
        class="sm:rotate-3 hover:rotate-0 transition-all duration-300 size-36 rounded-2xl ring-2 ring-primary/40 ring-offset-4 ring-offset-bg shadow-[0_0_30px_-8px_var(--ui-primary)]"
        :light="global.picture?.light!"
        :dark="global.picture?.dark!"
        :alt="global.picture?.alt!"
      />
    </UPageHero>
    <UPageSection
      :ui="{
        container: 'pt-0!'
      }"
    >
      <Motion
        :initial="{ opacity: 0, y: 10 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{
          delay: 0.2,
          ease: 'easeOut'
        }"
      >
        <MDC :value="page.intro" />

        <template v-if="page.stack">
          <MDC :value="page.stack.content" />
          <LandingStack
            :items="page.stack.items"
            class="my-8"
          />
        </template>

        <MDC :value="page.personal" />

        <div
          class="flex flex-row justify-center items-center py-10 -space-x-8"
        >
          <PolaroidItem
            v-for="(image, index) in page.images"
            :key="index"
            :image="image"
            :index
          />
        </div>
      </Motion>
    </UPageSection>
  </UPage>
</template>
