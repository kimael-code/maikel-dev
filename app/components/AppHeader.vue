<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { en, es } from '@nuxt/ui/locale'

defineProps<{
  links: NavigationMenuItem[]
}>()

const { locale, setLocale } = useI18n()

function onLocaleChange (event: string | undefined) {
  if (event)
    setLocale(event as 'en' | 'es')
}
</script>

<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden'
      }"
    >
      <template #list-trailing>
        <ColorModeButton />
        <ULocaleSelect
          size="xs"
          variant="subtle"
          v-model="locale"
          :locales="[en, es]"
          @update:model-value="onLocaleChange"
        />
      </template>
    </UNavigationMenu>
  </div>
</template>