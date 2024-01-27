// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // router: {
  //   base: '/auth'
  // },
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
  devtools: { enabled: false },
  pwa: {
    manifest: {
      name: "Threads Clone",
      short_name: "Threads Clone",
      description: "This is a Threads Clone",
      theme_color: "#000000",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  }
})
