<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
  <div class="flex flex-col bg-white shadow-2xl h-40 w-40 sm:h-52 sm:w-52 lg:h-64 lg:w-64 rounded-sm font-marker transition-all hover:scale-[2.0] md:hover:scale-150 hover:rotate-0 hover:z-10">
    <div class="flex-1 px-2 pt-2 md:px-4 md:pt-4">
      <slot></slot>
    </div>
    <div class="flex-1 text-blue-900 text-[10px] sm:text-sm lg:text-lg flex justify-center items-center">{{ title }}</div>
  </div>
</template>