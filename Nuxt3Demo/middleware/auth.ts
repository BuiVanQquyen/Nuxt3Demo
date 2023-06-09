export default defineNuxtRouteMiddleware(async (to, from) => {
    // init client when user refresh page or navigator page
    const nuxtInit = useAuthStore()

    await nuxtInit.nuxtInitClient()
    
    // check user login
    const userLogin = useAuth()
    if(!userLogin){
        return navigateTo('/login')
    }
})