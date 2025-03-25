export default defineNuxtConfig({
  runtimeConfig: {
    deepseek: {
      apiKey: process.env.DEEPSEEK_API_KEY ?? ''
    }
  }
}); 