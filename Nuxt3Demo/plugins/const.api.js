import constApi from '../constants/api'
export default defineNuxtPlugin((ssrContext) => {
    return{
        provide:{
            apiUrl : constApi
        }
    }
})