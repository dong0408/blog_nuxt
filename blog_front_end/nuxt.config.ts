// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir:'src/',
  //module
  modules:[
      '@pinia/nuxt',
      '@vueuse/nuxt',
      '@element-plus/nuxt',
      '@unocss/nuxt',
      'nuxt-monaco-editor'
      // ['@nuxtjs/axios',
      // {proxyHeaders:false},]
  ],
    // publicRuntimeConfig: {
    //   axios:{
    //       baseURL:
    //           process.env.NODE_ENV === "production"
    //               ? "/api"
    //               : "http://localhost:3005/api",
    //   }
    // },
    elementPlus: { /** Options */
        // ElMessage,
    },
    vite:{
      css:{
          preprocessorOptions:{
              scss:{
                  additionalData:'@import "@/assets/styles/default.scss"'
              }
          }
      }
    },
    buildModules:[
        "@pinia/nuxt",
        "@vueuse/nuxt",
        "@nuxtjs/axios",

    ]
})
