<script setup lang="ts">
  interface Props {
    title?: string,
    path?: string,
    type?: 'submit' | 'reset' | 'button',
    inverted?: boolean,
    download?: string
  }
  const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    inverted: false
  })
  const emit = defineEmits(['click'])
  const btnClasses = `transition-all inline-block ${props.inverted ? 'bg-emerald-500 rounded-lg inline-block py-2 px-4 font-bold text-white hover:scale-105 hover:bg-emerald-700' : 'border-2 border-white text-white rounded-full py-2 px-4 font-bold hover:scale-105 hover:bg-emerald-500'} `
</script>

<template>
  <NuxtLink v-if="path && !download" :to={path} :class="btnClasses">
    <slot></slot>
  </NuxtLink>
  <button v-if="!path" :class="btnClasses" :type="props.type" @click="emit('click')">
    <slot></slot>
  </button>
  <a v-if="path && download" :href="path" :download="download" target="_blank" :class="btnClasses">
    <slot></slot>
  </a>
</template>