<script setup lang="ts">
const { locale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const nextLocale = computed(() => (locale.value === 'en' ? 'es' : 'en'))
</script>

<template>
  <UTooltip :text="t('Switch language')">
    <UButton
      :to="switchLocalePath(nextLocale)"
      :locale="false"
      :aria-label="t('Switch language')"
      color="neutral"
      variant="ghost"
      size="sm"
      class="rounded-full font-medium text-xs px-2 gap-1 text-muted hover:text-highlighted"
    >
      <UIcon
        name="i-lucide-languages"
        class="size-3.5 shrink-0"
      />
      <span class="uppercase">{{ locale }}</span>
    </UButton>
  </UTooltip>
</template>
