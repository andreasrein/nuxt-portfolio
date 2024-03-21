<script setup lang="ts">
  interface Props {
    title?: string,
    path?: string,
    type?: 'submit' | 'reset' | 'button',
    inverted?: boolean
  }
  const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    inverted: false
  })
  const btnClasses = `transition-all inline-block ${props.inverted ? 'bg-emerald-500 rounded-lg inline-block py-2 px-4 font-bold text-white hover:scale-105 hover:bg-rose-200' : 'bg-white border-none rounded-lg text-black mix-blend-screen py-2 px-4 font-bold hover:scale-105 hover:bg-rose-200'} `
</script>

<template>
  <NuxtLink v-if="path" :to={path} :class="btnClasses">
    <slot></slot>
  </NuxtLink>
  <button v-else :class="btnClasses" :type="props.type">
    <slot></slot>
  </button>
</template>