// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    imports: {
      dirs: ['stores'],
    },
    runtimeConfig: {
      // Keys within public are also exposed client-side
      public: {
        apiBase: 'https://localhost:44390'
      },
    },
    css: [
        '@/assets/css/tailwind.css'
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    app: {
      head: {
        title: 'V3-NuxtDemo',
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/flaticon.png' }
        ]
      },
      
    },
    modules: [
      // add pinia
      [
        '@pinia/nuxt',
        {
          autoImports: ['defineStore', 'acceptHMRUpdate'],
        },
      ]
    ],
    ssr: false,
    nitro: {
      preset: "node-server"
    }
})
