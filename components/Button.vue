<script setup lang="ts">
  const props = defineProps<{
    title?: string,
    path?: string,
  }>()
  const btnClasses = "transition-all inline-block bg-white border-none rounded-lg text-black mix-blend-screen py-2 px-4 font-bold hover:scale-105 hover:bg-rose-200"
</script>
<template>
  <NuxtLink v-if="path" :to={path} :class="btnClasses">
    <slot></slot>
  </NuxtLink>
  <button v-else :class="btnClasses">
    <slot></slot>
  </button>
</template>