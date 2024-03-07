<script setup lang="ts">
// import { useDebounceFn } from '@vueuse/core'

// onMounted(() => {
//   window.addEventListener("resize", handleResize);
// })
// onUnmounted(() => {
//   window.removeEventListener("resize", handleResize);
// })

const isOpen = ref(false)

// TODO: USE LATER
// const isSmallDevice = ref(true)
// const handleResize = useDebounceFn(() => {
//   if (window.innerWidth > 640) {
//     isSmallDevice.value = false
//   } else {
//     isSmallDevice.value = true
//   }
// }, 200)

const handleExpanderClick = () => {
  isOpen.value = !isOpen.value
}
handleResize()

</script>
<template>
  <nav class="z-10 fixed right-0 flex flex-col items-end text-white font-thin h-full">
    <div class="right-0 top-0 z-10">
      <button class="p-8" @click="handleExpanderClick">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="fill-white"><path d="M95-203v-95h771v95H95Zm0-230v-94h771v94H95Zm0-229v-95h771v95H95Z"/></svg>
      </button>
    </div>
    <div v-if="isOpen" class="relative z-10 p-8 h-full bg-white/10 transition-all">
      <ul class="flex flex-col sm:flex-col gap-4">
        <li><NuxtLink to="/">HOME</NuxtLink></li>
        <li><NuxtLink to="/about">ABOUT</NuxtLink></li>
        <li><NuxtLink to="/experience">EXPERIENCE</NuxtLink></li>
        <li><NuxtLink to="/contact">CONTACT</NuxtLink></li>
      </ul>
    </div>

  </nav>
</template>