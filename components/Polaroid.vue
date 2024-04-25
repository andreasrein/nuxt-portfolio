<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
  <div class="bg-white shadow-2xl h-40 w-40 sm:h-52 sm:w-52 lg:h-64 lg:w-64 rounded-sm font-marker transition-all hover:scale-150 md:hover:scale-[2.0] hover:rotate-0 hover:z-10">
    <div class="p-2 md:p-4">
      <slot></slot>
    </div>
    <div class="text-blue-900 text-[10px] sm:text-sm lg:text-lg flex justify-center">{{ title }}</div>
  </div>
</template>