<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    id="about"
    :description="page.about.description"
    class="scroll-mt-24"
    :ui="{
      container: 'p-0!',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left text-pretty mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <template #title>
      <a
        href="#about"
        class="group relative inline-flex items-center transition-colors duration-200 hover:text-primary focus-visible:text-primary lg:after:absolute lg:after:inset-y-0 lg:after:-inset-s-2 lg:after:w-2"
      >
        <span class="absolute -ms-8 top-0.5 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated border border-primary/40 text-primary rounded-md hidden lg:flex shadow-xs transition">
          <UIcon
            name="i-lucide-hash"
            class="size-4 shrink-0"
          />
        </span>
        {{ page.about.title }}
      </a>
    </template>
  </UPageSection>
</template>

<style scoped></style>
