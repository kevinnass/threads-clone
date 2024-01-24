// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxtjs/supabase',
  ],
  supabase: {
    redirect: false
  },
  runtimeConfig: {
    public: {
      bucketUrl: process.env.BUCKET_URL
    }
  },
  devtools: { enabled: false }
})
