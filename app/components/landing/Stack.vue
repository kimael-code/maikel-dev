<script setup lang="ts">
interface StackItem {
  name: string;
  icon: string;
  color?: string;
}

defineProps<{
  items?: StackItem[];
}>();
</script>

<template>
  <div
    v-if="items"
    class="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 gap-3"
  >
    <UTooltip v-for="(tech, index) in items" :key="index" :text="tech.name">
      <div
        class="flex items-center justify-center p-3 rounded-xl border border-default bg-default/5 transition-all duration-300 group hover:bg-default/10 aspect-square"
        :style="{ '--brand-color': tech.color || 'var(--ui-primary)' }"
      >
        <UIcon
          :name="tech.icon"
          class="size-8 text-muted group-hover:text-[var(--brand-color)] transition-all duration-300 transform group-hover:scale-110"
        />
      </div>
    </UTooltip>
  </div>
</template>

<style scoped>
.group:hover {
  border-color: color-mix(in srgb, var(--brand-color) 30%, transparent);
  box-shadow: 0 0 15px -5px var(--brand-color);
}
</style>
