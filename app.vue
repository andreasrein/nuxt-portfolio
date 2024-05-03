<script setup lang="ts">
useServerSeoMeta({
  title: 'Andreas Reinholdsson',
  ogTitle: 'Andreas Reinholdsson',
  description: 'Andreas Reinholdssons work history and professional profile',
  ogDescription: 'Andreas Reinholdssons work history and professional profile',
  ogImage: 'https://reinholdsson.dev/img/portrait.png'
})
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

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(.5rem);
  transform: translateY(-10%);
}
</style>
