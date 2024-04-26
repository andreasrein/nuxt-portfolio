<script setup lang="ts">
  const { data } = await useAsyncData(() => queryContent('experience').findOne());

  const yearsOfExperience = () => {
    const now = new Date().getFullYear()
    const d = new Date("2017-01-01").getFullYear()
    return `${now - d}+`
  }
  const skills = ["JavaScript", "React.js", "Vue.js", "TypeScript", "Node", "HTML5", "CSS3", "Next.js", "Nuxt.js", "SCSS", "Cypress", "Jest", "Vuex", "Redux"]
  const areas = [
    {title: "JavaScript", percentage: 98},
    {title: "UX", percentage: 90},
    {title: "Testing", percentage: 85},
    {title: "Design", percentage: 89},
  ]

  const handleClick = () => {
    window.scroll({top: 0, behavior: 'smooth'})
  }
</script>

<template>
  <LayoutSection>    
    <article class="mb-24 grid grid-cols-1 md:grid-cols-3 justify-center gap-8 md:gap-16">
      <div class="flex flex-col items-center">
        <div class="flex justify-center items-center h-28 w-28 bg-amber-300 rounded-full shadow mb-6">
          <div class="h-5/6 w-5/6 bg-amber-300 rounded-full shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.5)] flex justify-center items-center text-4xl font-bold text-gray-600">
            {{ yearsOfExperience() }}
          </div>
        </div>
        <div class="text-center text-5xl font-bold">YEARS IN BUSINESS</div>
      </div>
      <div class="flex flex-col">
        <div class="text-lg font-bold mb-6">PRIMARY SKILLS</div>
        <ul>
          <li v-for="skill in skills" :key="skill" class="transition-colors inline-block border-solid border-2 border-white rounded-full py-1 px-3 hover:bg-white hover:text-indigo-500 font-bold mr-2 mb-2">{{ skill }}</li>
        </ul>
      </div>
      <div>
        <div class="text-lg font-bold mb-6">MASTERY</div>
        <label v-for="area in areas" :key="area.title" class="w-full">
          <div class="mb-2">{{ area.title }}</div>
          <progress :id="area.title" :value="area.percentage" max="100" class="w-full"> {{area.percentage}}% </progress>
        </label>
      </div>
    </article>
   <div class="flex flex-col md:flex-row items-start md:justify-between md:items-center mb-12 ">
      <h1 class="text-3xl sm:text-5xl font-bold mb-4 md:mb-0">
        Earlier assignments
      </h1>
      <div>
        <Button path="/files/Andreas_Reinholdsson_CV.pdf" download="Andreas_Reinholdsson_CV"><img src="/img/download.svg" alt="download resume" class="inline mr-1">Download CV</Button>
      </div>
    </div>
    <article id="markdown-content" class="mb-8">
      <ContentRendererMarkdown v-if="data" :value="data"/>
    </article>
    <div class="flex justify-center">
      <Button @click="handleClick">
        <img src="/img/2x_arrow_top.svg" alt="double arrow icon" class="inline">
        <span class="ml-2">Back to the top</span>
      </Button>
    </div>
  </LayoutSection>
</template>
<style lang="css">
  progress[value]::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }
  progress[value]::-webkit-progress-value {
    @apply bg-gradient-to-r from-emerald-800 to-emerald-600;
    border-radius: 2px;
  }
  #markdown-content h2 { @apply text-2xl md:text-4xl font-bold text-emerald-200}
  #markdown-content h2:not(:first-child) { @apply mt-16}
  #markdown-content h3 { @apply font-thin mb-4 mt-1 text-lg}
  #markdown-content p { @apply mb-4}
  #markdown-content em { @apply font-thin}
</style>