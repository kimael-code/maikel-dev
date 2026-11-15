<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-50">
    <UNavigationMenu
      :items="links"
      variant="pill"
      color="primary"
      highlight
      highlight-color="primary"
      class="nav-glass-pill rounded-full px-3 sm:px-4"
      :ui="{
        link: 'px-3 py-1 rounded-full before:rounded-full data-[active]:before:bg-primary/12 after:-bottom-1.5 after:inset-x-3 after:h-[2px]',
        linkLeadingIcon: 'hidden'
      }"
    >
      <template #list-trailing>
        <ColorModeButton />
        <LanguageToggle />
      </template>
    </UNavigationMenu>
  </div>
</template>
