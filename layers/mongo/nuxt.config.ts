export default defineNuxtConfig({
  runtimeConfig: {
    mongo: {
      url: process.env.MONGO_URL ?? 'mongodb+srv://geektao1024:litao1024@cluster0.sdlpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    }
  }
});
