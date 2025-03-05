<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { onMounted, computed } from 'vue'

const languageStore = useLanguageStore()

const texts = computed(() => languageStore.texts)

onMounted(async () => {
  await languageStore.setLanguage(languageStore.selectedLanguage) // Isso já chama `setTexts`
})
</script>

<template>
  <header>
    <div className="wrapper fixed w-full flex items-center justify-center z-50 pt-12 ">
      <nav
        className="text-white-smull flex gap-4 py-3 px-12 justify-center bg-primary rounded-2xl border border-white"
      >
        <RouterLink to="/"> {{ texts?.NAVBAR?.HOME }} </RouterLink>
        <RouterLink to="/">{{ texts?.NAVBAR?.PROJECTS }}</RouterLink>
        <RouterLink to="/">{{ texts?.NAVBAR?.TESTIMONIALS }}</RouterLink>
        <RouterLink to="/">{{ texts?.NAVBAR?.CONTACT }}</RouterLink>
      </nav>
    </div>
  </header>
</template>
