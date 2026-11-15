<script setup lang="ts">
</script>

<template>
  <div>
    <UContainer class="relative overflow-hidden sm:border-x border-default pt-10">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 top-0 h-112 -z-10"
      >
        <div class="absolute inset-0 bg-grid-pattern opacity-70" />
        <div class="absolute inset-x-0 top-0 h-72 bg-ambient-glow" />
      </div>
      <AppHeader :links="navLinks()" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
