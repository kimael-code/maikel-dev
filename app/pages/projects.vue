<script setup lang="ts">
const { locale } = useI18n()

const { data: page } = await useAsyncData(
  `projects-page-${locale.value}`,
  () => {
    return queryCollection('pages')
      .where('language', '=', locale.value)
      .first()
  }
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { data: projects } = await useAsyncData(
  `projects-${locale.value}`,
  () => {
    return queryCollection('projects')
      .where('language', '=', locale.value)
      .order('date', 'DESC')
      .all()
  }
)

const { global } = useAppConfig()

const titleParts = computed(() => {
  const title = page.value?.title || ''
  const commaIndex = title.indexOf(',')
  if (commaIndex === -1) {
    return {
      prefix: '',
      highlight: title
    }
  }
  return {
    prefix: title.slice(0, commaIndex + 1),
    highlight: title.slice(commaIndex + 1).trim()
  }
})

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
      :links="page.links"
      :ui="{
        title: 'mx-0! text-left',
        description: 'mx-0! text-left',
        links: 'justify-start'
      }"
    >
      <template #title>
        <span
          v-if="titleParts.prefix"
          class="text-highlighted"
        >
          {{ titleParts.prefix }}
        </span>
        <span class="text-gradient-brand">
          {{ titleParts.prefix ? ` ${titleParts.highlight}` : titleParts.highlight }}
        </span>
      </template>
      <template #links>
        <div
          v-if="page.links"
          class="flex items-center gap-2"
        >
          <UButton
            :label="page.links[0]?.label"
            :to="global.meetingLink"
            target="_blank"
            rel="noopener noreferrer"
            v-bind="page.links[0]"
          />
          <UButton
            :to="global.githubLink"
            target="_blank"
            rel="noopener noreferrer"
            v-bind="page.links[1]"
          />
        </div>
      </template>
    </UPageHero>
    <UPageSection
      :ui="{
        container: 'pt-0!'
      }"
    >
      <Motion
        v-for="(project, index) in projects"
        :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
      >
        <UPageCard
          :title="project.title"
          :description="project.description"
          :to="project.url"
          target="_blank"
          orientation="horizontal"
          variant="subtle"
          spotlight
          spotlight-color="primary"
          :reverse="index % 2 === 1"
          class="group mb-6 rounded-2xl ring-default/80 hover:ring-primary/50 transition-all duration-300 shadow-sm hover:shadow-[0_12px_35px_-10px_rgba(101,163,13,0.28)] dark:hover:shadow-[0_0_35px_-10px_rgba(163,230,53,0.28)] hover:-translate-y-0.5"
          :ui="{
            wrapper: 'max-sm:order-last',
            spotlight: 'bg-default/75 dark:bg-default/90',
            title: 'group-hover:text-primary transition-colors'
          }"
        >
          <template #leading>
            <span class="inline-flex items-center font-mono text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
              {{ new Date(project.date).getUTCFullYear() }}
            </span>
          </template>
          <template #footer>
            <div class="flex flex-col gap-3">
              <div
                v-if="project.tags?.length"
                class="flex flex-wrap gap-1.5"
              >
                <UBadge
                  v-for="tag in project.tags"
                  :key="tag"
                  :label="tag"
                  color="neutral"
                  variant="subtle"
                  size="sm"
                  class="font-mono text-[11px]"
                />
              </div>
              <ULink
                :to="project.url"
                class="text-sm text-primary flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t("View Project") }}
                <UIcon
                  name="i-lucide-arrow-right"
                  class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </ULink>
            </div>
          </template>
          <div class="overflow-hidden rounded-xl border border-default/60 bg-default/40 shadow-md">
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              decoding="async"
              class="object-cover w-full h-48 sm:h-52 transition-transform duration-500 ease-out group-hover:scale-105"
            >
          </div>
        </UPageCard>
      </Motion>
    </UPageSection>
  </UPage>
</template>
