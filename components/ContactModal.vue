<script setup lang="ts">
import { ref } from 'vue';

const showForm = ref(false)
const name = ref('')
const email = ref('')
const message = ref('')
const formSubmitted = ref(false)
const isValid = reactive({
  name: false,
  email: false,
  message: false
})

const handleContactClick = () => {
  showForm.value = !showForm.value 
}

const formStatus = ref('unsent')
const setFormStatus = (val: 'unsent' | 'pending' | 'success' | 'error') => {
  formStatus.value = val
}

const validateForm = () => {
  !formSubmitted.value ? formSubmitted.value = true : null

  name.value.length !== 0 ? isValid.name = true : isValid.name = false
  email.value.length !== 0 && email.value.indexOf('@') > -1 ? isValid.email = true : isValid.email = false
  message.value.length > 6 ? isValid.message = true : isValid.message = false

  const hasError = Object.values(isValid).some(val => val === false);

  return hasError
}

async function handleFormSubmit(event: Event) {
  const hasError = validateForm()
  if (hasError) return
  startTimer()
  setFormStatus('pending')

  try {
    const body = new FormData(event.target as HTMLFormElement)
    await $fetch('https://formspree.io/f/xleqlbjz', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body
    }).then(res => {
      if (res) {
        startTimer()
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

const count = ref(6)
const startTimer = () => {
  const interval = setInterval(() => {
    count.value--
    if (count.value === 0) {
      clearInterval(interval)
      count.value = 6
      resetForm()
    }
  }, 1000)
}

const resetForm = () => {
  setFormStatus('unsent')
  formSubmitted.value = false
  showForm.value = false
  name.value = ''
  email.value = ''
  message.value = ''
  isValid.name  = false
  isValid.email = false
  isValid.message = false
}
</script>
<template>
  <div class="fixed bottom-4 right-[4vw] sm:right-6 z-40">
    <button
      class="w-40 h-10 md:w-56 md:h-14 flex justify-center items-center bg-brush-stroke bg-cover bg-no-repeat transition-all hover:scale-110"
      :class="{'opacity-0': showForm}"
      @click="handleContactClick">
      <div class="text-emerald-500 font-bold text-sm md:text-xl mb-1">Contact me!</div>
    </button>
    <section
      class="absolute rounded bg-white shadow-2xl transition-all bottom-0 overflow-hidden md:max-h-[780px] h-[90vh] w-[92vw] md:w-[50vw] lg:w-[460px]"
      :class="{'-right-[96vw] md:-right-[54vw] lg:-right-[500px]': !showForm, 'right-0 md:right-0 lg:right-0': showForm}"
    >
      <div class="h-full p-4 sm:p-8 overflow-auto">
        <div class="flex justify-between items-center text-black mb-8">
          <h2 class="text-4xl font-bold text-emerald-500">Contact Me</h2>
          <button @click="handleContactClick" class="transition-colors hover:bg-emerald-500/10 rounded-full p-3 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="fill-emerald-500"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </button>
        </div>
        <div class="bg-emerald-500/10 text-emerald-500 rounded p-4 sm:p-8 mb-8">
          <div class="flex gap-2 items-center mb-2 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="fill-emerald-500"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200h400v-480H280v480Z"/></svg>
            <a href="tel:+46768619378" target="_blank" class="text-xs sm:text-base">+46 (0)76 861 93 78</a>
          </div>
          <div class="flex gap-2 items-center mb-2 transition-all hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="fill-emerald-500"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z"/></svg>
            <a href="mailto:reinholdsson.andreas@gmail.com" target="_blank" class="text-xs sm:text-base">reinholdsson.andreas@gmail.com</a>
          </div>
          <div class="flex gap-2 items-center hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24px" height="24px" class="fill-emerald-500"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
            <a href="https://www.linkedin.com/in/andreas-reinholdsson/" target="_blank" class="text-xs sm:text-base">LinkedIn Profile</a>
          </div>
        </div>
        <div v-if="formStatus === 'error'" class="rounded bg-red-600/50 p-4 mb-4">
          <p>Whoops! Something went wrong when trying to submit the form, please try again!</p>
        </div>
        <div v-if="formStatus === 'pending'" class="flex justify-center items-center p-8 text-black text-4xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="animate-spin fill-emerald-500"><path d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"></path></svg>
        </div>
        <div v-if="formStatus === 'success'" class="p-8 font-roboto">
          <div class="flex justify-center items-center text-emerald-500 text-4xl">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="fill-emerald-500 h-10 w-10"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
            <div class="ml-2">Sent!</div>
          </div>
          <div class="text-emerald-500 text-base flex justify-center mt-8">
            I will close this for you in {{ count }}s
          </div>
        </div>
        <form v-if="formStatus !== 'pending' && formStatus !== 'success'" novalidate class="flex flex-col text-emerald-500" id="my-form" @submit.prevent="handleFormSubmit">
          <div class="flex flex-col mb-6 font-roboto text-md relative">
            <label for="name" class="mb-2">
              Full Name
            </label>
            <input
              class="rounded p-2 text-black bg-white/15 border-2 border-emerald-500 shadow-inner"
              :class="{'border-red-500': formSubmitted && !isValid.name}"
              id="name"
              type="name"
              name="name"
              v-model="name" />
            <span v-if="formSubmitted && !isValid.name" class="absolute text-red-500 text-xs -bottom-5">Please enter your full name</span>

          </div>
          <div class="flex flex-col mb-6 font-roboto text-md relative">
            <label for="email" class="mb-2">
              Email
            </label>
            <input 
              class="rounded p-2 text-black bg-white/15 border-2 border-emerald-500 shadow-inner"
              :class="{'border-red-500': formSubmitted && !isValid.email}"
              id="email"
              type="email"
              name="email"
              v-model="email" />
            <span v-if="formSubmitted && !isValid.email" class="absolute text-red-500 text-xs -bottom-5">Please enter a valid email address</span>

          </div>
          <div class="flex flex-col mb-8 font-roboto text-md relative">
            <label for="message" class="mb-2">
              Message
            </label>
            <textarea
              class="rounded p-2 text-black bg-white/15 border-2 border-emerald-500 shadow-inner"
              :class="{'border-red-500': formSubmitted && !isValid.message}"
              id="message"
              type="text"
              name="message"
              v-model="message"
              rows="5" />
            <span v-if="formSubmitted && !isValid.message" class="absolute text-red-500 text-xs -bottom-5">Please enter a message</span>
          </div>
          <div class="z-10 text-right">
            <Button type="submit" inverted>Submit</Button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>