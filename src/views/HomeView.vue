<script setup>
import { useGtag } from "vue-gtag-next";


import { onBeforeMount, onMounted, ref } from 'vue'
import { VueWinBox } from 'vue-winbox'

const { event } = useGtag()

const wbAboutRef = ref()
const wbContactRef = ref()

const isContact = ref(false);
const isAbout = ref(false);

const width = window.innerWidth;

const terminalOpt = ref(null);

//WinBox About options
const optionsAbout = {
  title: 'About me',
  class: 'modern',
  background: '#00aa00',
  width: 0,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}

const optionsContact = {
  title: 'Contact me',
  class: 'modern',
  background: '#00aa00',
  width: 0,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}

const toggleAbout = () => {
  // options.
  isAbout.value = true;
  wbAboutRef.value?.winbox?.initialize()
}

const toggleContact = () => {
  // options.title = 'Contact me'
  isContact.value = true;
  wbContactRef.value?.winbox?.initialize()
}

const blur = (name) => {
  event('view_item', {
    'event_label': name,
    'event_category': 'engagement',
  })
}

onBeforeMount(() => {
  terminalOpt.value = initTerminalWidth()

  optionsAbout.width = terminalOpt.value.width
  optionsAbout.top = terminalOpt.value.top
  optionsAbout.left = terminalOpt.value.left
  optionsAbout.right = terminalOpt.value.right
  optionsAbout.bottom = terminalOpt.value.bottom
  
  
  optionsContact.width = terminalOpt.value.width
  optionsContact.top = terminalOpt.value.top
  optionsContact.left = terminalOpt.value.left
  optionsContact.right = terminalOpt.value.right
  optionsContact.bottom = terminalOpt.value.bottom
})

const initTerminalWidth = () => {
  return {
    width: width <= 425 ? 300 : 400,
    top: width <= 425 ? 10 : 50,
    right: width <= 425 ? 10 : 50,
    left: width <= 425 ? 10 : 50,
    bottom: width <= 425 ? 10 : 50
  }
}



</script>

<template>
  <header class="font-console">
    <nav class="mb-2">
      <ul class="flex space-x-4 items-center justify-center font-semibold">
        <li @click="toggleContact()" class="tracking-normal cursor-pointer">/contact-me</li>
        <li @click="toggleAbout()" class="tracking-normal cursor-pointer">/about-me</li>
      </ul>
    </nav>

    <h1 class="text-center text-2xl font-bold tracking-wide text-green-900">deanabnerjul:$<span class="animate-blink duration-75 ease-in-out">|</span></h1>
  </header>

  <RouterView />

  <footer class="font-console">
    <h3 class="text-xl font-medium">Find me online:</h3>
    <ul class="text-sm leading-6 mb-4">
      <li>
        <a href="https://twitter.com/deanabnerjul" target="_blank">Twitter</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/deanabner" target="_blank">Linkedin</a>
      </li>
      <li>
        <a href="https://www.instagram.com/deanabnerjul" target="_blank">Instagram</a>
      </li>
      <li>
        <a href="https://github.com/julians22" target="_blank">Github</a>
      </li>
    </ul>

    <p class="text-lg font-semibold text-cyan-600">My daily items <router-link :to="{ name: 'daily-items' }">here</router-link> ✨✨</p>
  </footer>



  <div v-if="isAbout">
    <VueWinBox ref="wbAboutRef" :options="optionsAbout" @close="isAbout = false" @focus="blur('about')">
      <div class="p-3 text-white font-console">
        <h1 class="text-green-900 text-lg font-bold tracking-wide">about-me:$<span class="animate-blink duration-75 ease-in-out">|</span></h1>
        <div class="text-xs leading-normal font-extralight">
          <p>My name is Dean Abner Julian Gerung and I have been programming for 5 years</p>
          <p>Some of the languages that I am fluent in include JavaScript and PHP</p>
          <p>I am a Bachelor Degree System Information from Nusa Mandiri University in Jakarta, Indonesia.</p>
          <p>Friendly personality, hardworker and Big dreamer</p>
          <p>I have been a web developer since 2019, Working with fullstack powerfull framework like Laravel, CodeIgniter, SCSS/SASS for styling webiste, Vue.js for frontend component based styling, to consume api then make rough object readable by user, Pinia for state manajement of Vue.js, Ajax etc.</p>
        </div>
      </div>
    </VueWinBox>
  </div>

  <div v-if="isContact">
    <VueWinBox ref="wbContactRef" :options="optionsContact" @close="isContact = false" @focus="blur('contact')">
      <div class="p-3 text-white font-console">
        <h1 class="text-green-900 text-lg font-bold tracking-wide">contact-me:$<span class="animate-blink duration-75 ease-in-out">|</span></h1>
        <div class="text-xs leading-normal font-extralight">

        <p>You can contact me at the email and phone number below</p>
        <ul>
          <li>Phone: +62-812-1856-261</li>
          <li>Email: dabnerjulian@gmail.com</li>
        </ul>
        </div>  
      </div>
    </VueWinBox>
  </div>
</template>

<style>
  .wb-title{
    @apply font-console;
  }

  .wb-body{
    @apply bg-slate-900;
  }
</style>
