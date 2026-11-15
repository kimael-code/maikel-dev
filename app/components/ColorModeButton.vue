<script setup lang="ts">
const colorMode = useColorMode()
const { t } = useI18n()

const nextPreference = computed(() => {
  if (colorMode.preference === 'system') {
    return 'light'
  }
  if (colorMode.preference === 'light') {
    return 'dark'
  }
  return 'system'
})

const currentIcon = computed(() => {
  if (colorMode.preference === 'system') {
    return 'i-lucide-monitor'
  }
  if (colorMode.preference === 'light') {
    return 'i-lucide-sun'
  }
  return 'i-lucide-moon'
})

const themeLabel = computed(() => {
  if (colorMode.preference === 'system') {
    return t('Theme: System (switch to light)')
  }
  if (colorMode.preference === 'light') {
    return t('Theme: Light (switch to dark)')
  }
  return t('Theme: Dark (switch to system)')
})

const switchTheme = () => {
  colorMode.preference = nextPreference.value
}

const startViewTransition = (event: MouseEvent) => {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const nextResolvedTheme = nextPreference.value === 'system' ? systemTheme : nextPreference.value

  if (!document.startViewTransition || nextResolvedTheme === colorMode.value) {
    switchTheme()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  const transition = document.startViewTransition(() => {
    switchTheme()
  })

  transition.ready.then(() => {
    const duration = 600
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: duration,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  })
}
</script>

<template>
  <ClientOnly>
    <UTooltip :text="themeLabel">
      <UButton
        :aria-label="themeLabel"
        :icon="currentIcon"
        color="neutral"
        variant="ghost"
        size="sm"
        class="rounded-full text-muted hover:text-highlighted"
        @click="startViewTransition"
      />
    </UTooltip>
    <template #fallback>
      <div class="size-4" />
    </template>
  </ClientOnly>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-new(root) {
  z-index: 9999;
}
::view-transition-old(root) {
  z-index: 1;
}
</style>
