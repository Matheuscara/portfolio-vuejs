import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { eLanguageContract } from '@/interfaces/language_contract' // ✅ Certifique-se que o caminho está correto!

export const useLanguageStore = defineStore('language', () => {
  const selectedLanguage = ref('PT_BR')
  const texts = ref<eLanguageContract>()

  async function setLanguage(language: string) {
    selectedLanguage.value = language
    console.log('Language changed to', language)

    const textsRes = await getLanguage(language)
    setTexts(textsRes) // Atualiza os textos ao mudar o idioma
  }

  async function getLanguage(language: string) {
    try {
      const response = await fetch(`/language/${language}.json`)
      return await response.json()
    } catch (error) {
      console.error('Erro ao carregar o JSON:', error)
      return {} // Retorna um objeto vazio em caso de erro
    }
  }

  function setTexts(newTexts: any) {
    texts.value = newTexts // Agora o `texts` será atualizado corretamente
  }

  return { selectedLanguage, texts, setLanguage, getLanguage, setTexts }
})
