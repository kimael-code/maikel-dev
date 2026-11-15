<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter
    class="z-10 bg-default"
    :ui="{ left: 'text-muted font-mono text-xs' }"
  >
    <template #left>
      {{ footer.credits }}
    </template>

    <template #right>
      <div
        v-if="footer?.links"
        class="flex items-center gap-2"
      >
        <UTooltip
          v-for="(link, index) of footer?.links"
          :key="index"
          :text="$t(link['aria-label'])"
        >
          <UButton
            class="social-glow-btn rounded-lg p-1.5"
            v-bind="{ 'size': 'xs', 'color': 'neutral', 'variant': 'ghost', ...link, 'aria-label': $t(link['aria-label']) }"
          />
        </UTooltip>
      </div>
    </template>
  </UFooter>
</template>
