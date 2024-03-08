<script setup lang="ts">
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
</script>

<template>
  <section class="flex flex-col justify-center px-8 max-w-[1400px] min-[1400px]:mx-auto">
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
        <Button><img src="/img/download.svg" alt="download resume" class="inline mr-1">Download resume</Button>
      </div>
    </div>
    <article>
      <h2 class="text-4xl font-bold text-emerald-200">Feelgood AB</h2>
      <span class="font-thin">APR 2018 - APR 2023</span>
      <div class="mt-8">
        <p class="mb-4">
          Andreas has evolved his role at Feelgood, he learnt a lot, and been given more and more responsibility throughout the years. When Andreas joined the team he was one of two front end developers in a team of six. He later on became more of a lead developer for the frontend as colleagues joined and left the team. Andreas became a much appreciated co-worker, known for his problem solving skills and high sense of responsibility during his time at Feelgood.
        </p>
        <p class="mb-4">
          The initial assignment at Feelgood was to develop a web application to be used at all reception desks in Feelgood’s Swedish locations. In addition to developing the web application he also drove the project's expansion by visiting receptions where this solution was needed for pilot testing and collecting feedback from users and administrators. From that initial task Andreas was offered to be a permanent member of the tech team, working on Feelgood’s other digital solutions.
        </p>
        <p>
          When Andreas started working with their main product, the customer portal, it had several related web applications connected to it to be able to administrate orders, bookings, personnel data and general configurations per company. There was a need for a unified design and together with a UX designer, Andreas developed a design system with web components to get a more modular way of working with the front end.
          Andreas also developed the customer service solution together with his team, which was used as an everyday tool by the phone support to be able to quickly search and find specific doctors and nurses based on skill set and geographic location.
        </p>
      </div>
    </article>
    <!-- TBD: Fill with content -->
  </section>
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
</style>