<script setup lang="ts">
onMounted(() => {
  window.addEventListener('click', handleMenuClose)
})
onUnmounted(() => {
  window.removeEventListener('click', handleMenuClose)
})

// TODO: USE LATER

// import { useDebounceFn } from '@vueuse/core'

// onMounted(() => {
//   window.addEventListener("resize", handleResize);
// })
// onUnmounted(() => {
//   window.removeEventListener("resize", handleResize);
// })

// const isSmallDevice = ref(true)
// const handleResize = useDebounceFn(() => {
//   if (window.innerWidth > 640) {
//     isSmallDevice.value = false
//   } else {
//     isSmallDevice.value = true
//   }
// }, 200)
// handleResize()
const isOpen = ref(false)
const handleExpanderClick = () => {
  isOpen.value = !isOpen.value
}

const navbar = ref(null)
const handleMenuClose = (e) => {
  if (isOpen && !navbar.value.contains(e.target)) {
    isOpen.value = false
  }
}

const route = useRoute()
const activePath = ref('/')
watch(() => route.fullPath, () => {
  activePath.value = route.fullPath
  isOpen.value = false
})

const links = [
  {path: '/', title: 'HOME'},
  {path: '/about', title: 'ABOUT'},
  {path: '/experience', title: 'EXPERIENCE'},
  {path: '/contact', title: 'CONTACT'},
]
</script>
<template>
  <nav ref="navbar" class="z-10 right-0 flex flex-col items-end">
    <div class="right-0 top-0 z-10">
      <button class="p-8" @click="handleExpanderClick">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="fill-white"><path d="M95-203v-95h771v95H95Zm0-230v-94h771v94H95Zm0-229v-95h771v95H95Z"/></svg>
      </button>
    </div>
    <div v-if="isOpen" class="fixed text-2xl mt-28 z-10 py-8 px-16 h-full bg-white/20 backdrop-blur transition-all">
      <ul class="flex flex-col sm:flex-col gap-4">
        <li v-for="link in links" :key="link.path" class="mb-4">
          <NuxtLink :to="link.path" class="relative inline-block" :class="{'font-bold after:h-0.5 after:bg-white after:absolute after:-bottom-1.5 after:left-0 after:w-full': activePath === link.path}">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </div>

  </nav>
</template>