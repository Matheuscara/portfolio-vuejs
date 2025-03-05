export default async function getLanguage(language: string) {
  try {
    const response = await fetch(`/language/${language}.json`)
    return response.json()
  } catch (error) {
    console.error('Erro ao carregar o JSON:', error)
  }
}
