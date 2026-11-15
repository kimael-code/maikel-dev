<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    id="experience"
    class="scroll-mt-24"
    :ui="{
      container: 'p-0! gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #title>
      <a
        href="#experience"
        class="group relative inline-flex items-center transition-colors duration-200 hover:text-primary focus-visible:text-primary lg:after:absolute lg:after:inset-y-0 lg:after:-inset-s-2 lg:after:w-2"
      >
        <span class="absolute -ms-8 top-0.5 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated border border-primary/40 text-primary rounded-md hidden lg:flex shadow-xs transition">
          <UIcon
            name="i-lucide-hash"
            class="size-4 shrink-0"
          />
        </span>
        {{ page.experience.title }}
      </a>
    </template>
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
