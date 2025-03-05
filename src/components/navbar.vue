<script setup lang="ts">
import getLanguage from '@/utils/getLanguage'
import { useLanguageStore } from '@/stores/language'
import { onMounted, ref } from 'vue'

const { selectedLanguage } = useLanguageStore()
const texts = ref()

onMounted(async () => {
  texts.value = await getLanguage(selectedLanguage)
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
