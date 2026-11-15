<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.experience.title"
    :ui="{
      container: 'p-0! gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted flex items-center text-nowrap gap-2"
        >
          <p class="font-mono text-xs text-muted tracking-tight">
            {{ experience.date }}
          </p>
          <USeparator />
          <ULink
            class="flex items-center gap-1.5 group"
            :to="experience.company.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="text-sm">
              {{ experience.position }}
            </span>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border border-default bg-elevated/60 text-highlighted group-hover:border-primary/40 transition-colors">
              <span
                class="size-2 rounded-full shrink-0"
                :style="{ backgroundColor: experience.company.color }"
              />
              {{ experience.company.name }}
            </span>
          </ULink>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>
