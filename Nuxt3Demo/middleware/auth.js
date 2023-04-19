export default defineNuxtRouteMiddleware(async (to, from) => {
    // init client when user refresh page or navigator page
    const nuxtInit = useAuthStore()

    await nuxtInit.nuxtInitClient()
    
    // check user login
    const userLogin = useAuth()
    console.log('userLogin:', userLogin)
    if (userLogin && to.params.id && !from.params.id) {
      return navigateTo('/about')
    }
    // if (!userLogin) {
    //   return abortNavigation()
    // }
})