export const useAuthStore = defineStore('AuthStore', {
    state: () => {
        return {
            user: undefined,
            token: undefined
        }
    },
    getters: {

    },
    actions: {
        async nuxtInitClient(){
            const token = localStorage.getItem('token')
            if (token) {
                try {
                    const user = JSON.parse(localStorage.getItem('user'))
                    this.user = user
                    this.token = token
                    localStorage.setItem('user', JSON.stringify(this.user))
                    localStorage.setItem('token', this.token)
                    console.log('init successfully!!!')
                } catch (e) {
                    await this.logOut()
                }
            } else {
                await this.logOut()
            }
        },
        async login(url, data){
            const { $api } = useNuxtApp()
            const rs = await $api(url, { method: 'POST', body: data });
            if(rs){
                this.user = rs
                this.token = rs
                /* Store user in local storage to keep them logged in between page refreshes */
                localStorage.setItem('user', JSON.stringify(this.user))
                localStorage.setItem('token', JSON.stringify(this.token))

                await navigateTo({path: '/about'})
            } 
        },
        async logOut(){
            this.user = null
            this.token = null
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        }
    }
})