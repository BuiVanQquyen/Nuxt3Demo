interface AuthStateRoot {
    user?: LoginModel.ILoginResponse | null
    token: string
}
export const useAuthStore = defineStore('AuthStore', {
    state: (): AuthStateRoot => ({
        user: null,
        token: ''
    }),
    actions: {
        async nuxtInitClient(){
            const token = localStorage.getItem('token')
            if (token) {
                try {
                    const user = JSON.parse(localStorage.getItem('user')!)
                    this.user = user
                    this.token = token!
                    localStorage.setItem('user', JSON.stringify(this.user))
                    localStorage.setItem('token', this.token)
                } catch (e) {
                    await this.logOut()
                }
            } else {
                await this.logOut()
            }
        },
        async login(credentials: LoginModel.ILoginRequest){
            const { $api } = useNuxtApp();
            const response = await $api.auth.login(credentials)
            if(response){
                this.user = response
                this.token = response.token!
                /* Store user in local storage to keep them logged in between page refreshes */
                localStorage.setItem('user', JSON.stringify(this.user))
                localStorage.setItem('token', JSON.stringify(this.token))

                await navigateTo({path: '/'})
            } 
        },
        async logOut(){
            this.user = null
            this.token = ''
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        }
    }
})