<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { footer, global } = useAppConfig()

const props = defineProps<{
  page: IndexCollectionItem
}>()

const titleParts = computed(() => {
  const colonIndex = props.page.title.indexOf(':')
  if (colonIndex === -1) {
    return {
      prefix: '',
      highlight: props.page.title
    }
  }
  return {
    prefix: props.page.title.slice(0, colonIndex + 1),
    highlight: props.page.title.slice(colonIndex + 1).trim()
  }
})
</script>

<template>
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'max-w-lg mx-auto',
      links: 'mt-4 flex-col justify-center items-center'
    }"
  >
    <template #headline>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        <UColorModeAvatar
          class="size-20 ring-2 ring-primary/50 ring-offset-3 ring-offset-bg shadow-[0_0_25px_-5px_var(--ui-primary)] transition-transform duration-300 hover:scale-105"
          :light="global.picture?.light!"
          :dark="global.picture?.dark!"
          :alt="global.picture?.alt!"
        />
      </Motion>
    </template>

    <template #title>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        <span
          v-if="titleParts.prefix"
          class="block text-highlighted"
        >
          {{ titleParts.prefix }}
        </span>
        <span class="text-gradient-brand">
          {{ titleParts.highlight }}
        </span>
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.3
        }"
      >
        {{ page.description }}
      </Motion>
    </template>

    <template #links>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.5
        }"
      >
        <div class="flex items-center gap-2">
          <UButton
            :color="global.available ? 'success' : 'error'"
            variant="ghost"
            class="gap-2 rounded-full border px-4 py-1.5 font-mono text-xs sm:text-sm"
            :class="global.available ? 'border-success/30 bg-success/10 hover:bg-success/15 shadow-[0_0_20px_-6px_var(--color-green-500)]' : 'border-error/30 bg-error/10 hover:bg-error/15'"
            :to="global.available ? global.meetingLink : ''"
            :label="global.available ? $t('Available for new projects') : $t('Not available at the moment')"
          >
            <template #leading>
              <span class="relative flex size-2">
                <span
                  class="absolute inline-flex size-full rounded-full opacity-75"
                  :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
                />
                <span
                  class="relative inline-flex size-2 scale-90 rounded-full"
                  :class="global.available ? 'bg-success' : 'bg-error'"
                />
              </span>
            </template>
          </UButton>
        </div>
      </Motion>

      <div class="gap-x-3 sm:gap-x-4 inline-flex mt-5">
        <Motion
          v-for="(link, index) of footer?.links"
          :key="index"

          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: 0.5 + index * 0.1
          }"
        >
          <UTooltip :text="$t(link['aria-label'])">
            <UButton
              class="social-glow-btn rounded-xl p-2.5"
              v-bind="{ 'size': 'md', 'color': 'neutral', 'variant': 'ghost', ...link, 'aria-label': $t(link['aria-label']) }"
            />
          </UTooltip>
        </Motion>
      </div>
    </template>

    <UMarquee
      pause-on-hover
      class="py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s]"
    >
      <Motion
        v-for="(img, index) in page.hero.images"
        :key="index"
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: index * 0.1
        }"
      >
        <NuxtImg
          width="234"
          height="234"
          class="rounded-lg aspect-square object-cover"
          :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'"
          v-bind="img"
        />
      </Motion>
    </UMarquee>
  </UPageHero>
</template>
