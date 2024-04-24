<script setup lang="ts">
import { ref } from 'vue';

const showForm = ref(false)
const name = ref('')
const email = ref('')
const message = ref('')

const handleContactClick = () => {
  showForm.value = !showForm.value 
}

const formStatus = ref('unsent')
const setFormStatus = (val: 'unsent' | 'pending' | 'success' | 'error') => {
  formStatus.value = val
}

async function handleFormSubmit(event: Event) {
  setFormStatus('pending')

  try {
    const body = new FormData(event.target as HTMLFormElement)
    await $fetch('https://formspree.io/f/xleqlbjz', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body
    }).then((res) => {
      if (res.ok) {
        return setFormStatus('success')
      } else {
        return setFormStatus('error')
      }
    })
  } catch (error) {
    console.error(error);
    return setFormStatus('error')
  }
}

</script>
<template>
  <div class="fixed bottom-4 right-[4vw] sm:right-6 z-40">
    <button
      class="w-52 h-14 flex justify-center items-center bg-brush-stroke bg-contain bg-no-repeat transition-all hover:scale-110"
      :class="{'opacity-0': showForm}"
      @click="handleContactClick">
      <div class="text-emerald-500 font-bold text-xl mb-1">Contact me!</div>
    </button>
    <section
      class="absolute rounded bg-white shadow-2xl transition-all bottom-0 right-0 overflow-hidden"
      :class="{'h-[85vh] w-[92vw] md:w-[50vw] lg:w-[460px]': showForm, 'h-0 w-0': !showForm}"
    >
      <div class="h-full p-4 sm:p-8 overflow-auto">
        <div class="flex justify-between items-center text-black mb-8">
          <h2 class="text-4xl font-bold text-emerald-500">Contact me</h2>
          <button @click="handleContactClick" class="transition-colors hover:bg-emerald-500/10 rounded-full p-3 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="fill-emerald-500"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </button>
        </div>
        <div class="bg-emerald-500/10 text-emerald-500 rounded p-4 sm:p-8 mb-8">
          <div class="flex gap-2 items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="fill-emerald-500"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200h400v-480H280v480Z"/></svg>
            <a href="tel:+46768619378">+46 (0)76 861 93 78</a>
          </div>
          <div class="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="fill-emerald-500"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z"/></svg>
            <a href="mailto:reinholdsson.andreas@gmail.com">reinholdsson.andreas@gmail.com</a>
          </div>
        </div>
        <div v-if="formStatus === 'error'" class="rounded bg-red-600/50 p-4 mb-4">
          <p>Whoops! Something went wrong when trying to submit the form, please try again!</p>
        </div>
        <div v-if="formStatus === 'pending'" class="flex justify-center items-center p-8 text-black text-4xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="animate-spin fill-emerald-500"><path d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"></path></svg>
        </div>
        <div v-if="formStatus === 'success'" class="p-8 font-roboto text-emerald-500 text-4xl flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="fill-emerald-500 h-10 w-10"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
          <div class="ml-2">Sent!</div>
        </div>
        <form v-if="formStatus !== 'pending' && formStatus !== 'success'" class="flex flex-col text-emerald-500" id="my-form" @submit.prevent="handleFormSubmit">
          <div class="flex flex-col mb-4 font-roboto text-md">
            <label for="name" class="mb-2">
              Name
            </label>
            <input class="rounded p-2 text-black bg-white/15 border-2 border-emerald-500 shadow-inner" id="name" type="name" name="name" v-model="name" />
          </div>
          <div class="flex flex-col mb-4 font-roboto text-md">
            <label for="email" class="mb-2">
              Email
            </label>
            <input class="rounded p-2 text-black bg-white/15 border-2 border-emerald-500 shadow-inner" id="email" type="email" name="email" v-model="email" />
          </div>
          <div class="flex flex-col mb-8 font-roboto text-md">
            <label for="message" class="mb-2">
              Message
            </label>
            <textarea class="rounded p-2 text-black bg-white/15 border-2 border-emerald-500 shadow-inner" id="message" type="text" name="message" v-model="message" rows="5" />
          </div>
          <div class="z-10 text-right">
            <Button type="submit" inverted>Submit</Button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>