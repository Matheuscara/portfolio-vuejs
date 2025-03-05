import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', () => {
  const selectedLanguage = ref('PT_BR')

  const isEnglish = computed(() => selectedLanguage.value === 'EN')

  function setLanguage(language: string) {
    selectedLanguage.value = language
  }

  return { selectedLanguage, isEnglish, setLanguage }
})
