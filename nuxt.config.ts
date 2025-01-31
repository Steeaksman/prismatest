// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
     "@nuxtjs/tailwindcss",
     '@nuxtjs/supabase',
     
  ],
  /* prisma: {
    autoSetupPrisma: true,
  }, */
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false
   },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
