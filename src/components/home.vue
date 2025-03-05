<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { onMounted, computed } from 'vue'

const languageStore = useLanguageStore()

const texts = computed(() => languageStore.texts)

const changeLanguage = () => {
  languageStore.setLanguage(languageStore.selectedLanguage === 'EN_US' ? 'PT_BR' : 'EN_US')
}

onMounted(async () => {
  await languageStore.setLanguage(languageStore.selectedLanguage) // Isso já chama `setTexts`
})
</script>

<template>
  <div
    class="w-screen bg-no-repeat bg-cover bg-center animate__animated animate__fadeIn"
    :style="{ backgroundImage: `url('/svgs/home-bg.svg')` }"
  >
    <section class="home pt-60 flex flex-col items-center relative pb-27 md:pb-45">
      <span
        class="absolute top-0 left-0 w-1/2 h-full bg-no-repeat -z-10"
        :style="{ backgroundImage: `url('/svgs/spotlight.svg')` }"
      ></span>

      <span
        class="absolute top-0 right-0 w-1/2 h-full scale-x-[-1] bg-no-repeat -z-10"
        :style="{ backgroundImage: `url('/svgs/spotlight.svg')` }"
      ></span>

      <p class="text-white-soft text-sm md:text-base tracking-[.25em] uppercase pb-4 text-center">
        {{ texts?.HOME?.BUTTON }}
      </p>
      <h1 class="text-white text-3xl md:text-7xl font-bold tracking-tight text-center">
        {{ texts?.HOME?.TITLE }} <br />
        <span class="text-secundary"> {{ texts?.HOME?.KEYTITLE }} <br /> </span>
      </h1>
      <p class="text-white-soft text-sm md:text-base tracking-[.25em] uppercase pt-6 text-center">
        {{ texts?.HOME?.DESCRIPTION }}
      </p>
      <button
        @click="changeLanguage()"
        class="py-4 px-10 bg-primary text-white-smull tracking-tight rounded-2xl border border-white mt-10"
      >
        {{ texts?.HOME?.BUTTON }}
      </button>
    </section>
  </div>
</template>
