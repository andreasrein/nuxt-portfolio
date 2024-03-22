<script setup lang="ts">
  const isOpen = ref(false)
  const handleExpanderClick = () => {
    isOpen.value = !isOpen.value
  }

  const navbar = ref<HTMLElement | null>(null)
  // TODO: Specify event types better
  const handleMenuClose = (e: any) => {
    if (isOpen && !navbar.value?.contains(e.target)) {
      isOpen.value = false
    }
  }

  const route = useRoute()
  const activePath = ref('/')
  watch(() => route.fullPath, () => {
    activePath.value = route.fullPath
    isOpen.value = false
  })

  onMounted(() => {
    activePath.value = route.fullPath
    window.addEventListener('click', handleMenuClose)
  })
  onUnmounted(() => {
    window.removeEventListener('click', handleMenuClose)
  })

  const links = [
    {path: '/', title: 'HOME'},
    {path: '/about', title: 'ABOUT'},
    {path: '/experience', title: 'EXPERIENCE'}
  ]
  const spanClasses = 'block absolute h-[9px] w-full bg-white rounded transition-all'
</script>
<template>
  <nav ref="navbar" class="z-10 right-0 flex flex-col items-end">
    <div class="right-0 top-0 z-10">
      <button class="p-8" @click="handleExpanderClick">
        <div class="w-[60px] h-[45px] relative transition">
          <span class="origin-top-left" :class="spanClasses, {'rotate-45 -top-0.5 left-3': isOpen, 'rotate-0 top-0 left-0': !isOpen}"></span>
          <span class="origin-left top-[18px] left-0" :class="spanClasses, {'opacity-0 w-0': isOpen, 'opacity-100': !isOpen}"></span>
          <span class="origin-bottom-left bottom-0" :class="spanClasses, {'-rotate-45 left-3 -bottom-0.5': isOpen, 'rotate-0 left-0': !isOpen}"></span>
        </div>
      </button>
    </div>
    <div v-if="isOpen" class="fixed text-2xl mt-28 z-10 py-8 px-16 h-full bg-white/20 backdrop-blur transition-all">
      <ul class="flex flex-col sm:flex-col gap-4">
        <li v-for="link in links" :key="link.path" class="mb-4">
          <NuxtLink
            :to="link.path"
            class="relative inline-block"
            :class="{'font-bold after:h-0.5 after:bg-white after:absolute after:-bottom-1.5 after:left-0 after:w-full': activePath === link.path}">
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>