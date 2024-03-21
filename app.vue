<script setup lang="ts">
useHead({
  title: 'Andreas Reinholdsson',
  meta: [
    { name: 'Andreas Reinholdssons portfolio', content: 'Me and my work.' }
  ]
})
</script>

<template>
  <div class="relative flex flex-col box-border bg-gradient-to-r from-indigo-500 to-emerald-500 h-full min-h-screen w-full text-white pb-8">
    <Navigation />
    <NuxtPage />
    <ContactModal />
  </div>
</template>
